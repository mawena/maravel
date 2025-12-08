<template>
  <VRow>
    <VCol cols="12">
      <VCard>
        <VCardTitle>
          <VIcon
            icon="tabler-file-text"
            class="me-2"
          />
          Générateur de Documents Word
        </VCardTitle>
        <VCardText>
          <VAlert
            v-if="successMessage"
            type="success"
            variant="tonal"
            closable
            class="mb-4"
          >
            {{ successMessage }}
          </VAlert>

          <VAlert
            v-if="errorMessage"
            type="error"
            variant="tonal"
            closable
            class="mb-4"
          >
            {{ errorMessage }}
          </VAlert>

          <VForm @submit.prevent="generateDocuments">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VFileInput
                  v-model="excelFile"
                  label="Fichier Excel"
                  placeholder="Sélectionnez votre fichier Excel"
                  accept=".xlsx,.xls,.csv"
                  prepend-icon="tabler-file-spreadsheet"
                  :rules="[required]"
                  :disabled="loading"
                  show-size
                  counter
                />
                <VAlert
                  type="info"
                  variant="tonal"
                  class="mt-2"
                >
                  <small>
                    La première ligne doit contenir les en-têtes (noms des variables)
                  </small>
                </VAlert>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VFileInput
                  v-model="templateFile"
                  label="Template Word"
                  placeholder="Sélectionnez votre template Word"
                  accept=".docx"
                  prepend-icon="tabler-file-word"
                  :rules="[required]"
                  :disabled="loading"
                  show-size
                  counter
                />
                <VAlert
                  type="info"
                  variant="tonal"
                  class="mt-2"
                >
                  <small>
                    Utilisez ${nom_variable} dans le template pour les variables
                  </small>
                </VAlert>
              </VCol>

              <VCol cols="12">
                <VDivider class="my-4" />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VBtn
                  type="button"
                  color="info"
                  variant="outlined"
                  :disabled="!templateFile || loading"
                  block
                  @click="getTemplateVariables"
                >
                  <VIcon
                    icon="tabler-eye"
                    class="me-2"
                  />
                  Voir les variables du template
                </VBtn>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VBtn
                  type="submit"
                  color="primary"
                  :loading="loading"
                  :disabled="!excelFile || !templateFile"
                  block
                >
                  <VIcon
                    icon="tabler-file-export"
                    class="me-2"
                  />
                  Générer les documents
                </VBtn>
              </VCol>
            </VRow>
          </VForm>

          <VExpandTransition>
            <VCard
              v-if="templateVariables.length > 0"
              variant="tonal"
              class="mt-4"
            >
              <VCardTitle class="text-sm">
                Variables trouvées dans le template
              </VCardTitle>
              <VCardText>
                <VChipGroup>
                  <VChip
                    v-for="variable in templateVariables"
                    :key="variable"
                    color="primary"
                    variant="outlined"
                  >
                    {{ variable }}
                  </VChip>
                </VChipGroup>
                <VAlert
                  type="warning"
                  variant="tonal"
                  class="mt-3"
                >
                  <small>
                    Assurez-vous que votre fichier Excel contient des colonnes avec ces noms exactement
                  </small>
                </VAlert>
              </VCardText>
            </VCard>
          </VExpandTransition>

          <VCard
            variant="tonal"
            color="secondary"
            class="mt-6"
          >
            <VCardTitle class="text-sm">
              <VIcon
                icon="tabler-info-circle"
                class="me-2"
              />
              Guide d'utilisation
            </VCardTitle>
            <VCardText>
              <ol class="ps-4">
                <li class="mb-2">
                  <strong>Préparez votre fichier Excel :</strong>
                  <ul class="ps-4 mt-1">
                    <li>Première ligne : en-têtes (noms des variables)</li>
                    <li>Lignes suivantes : données pour chaque document</li>
                  </ul>
                </li>
                <li class="mb-2">
                  <strong>Préparez votre template Word :</strong>
                  <ul class="ps-4 mt-1">
                    <li>Utilisez <code>${nom_variable}</code> pour les variables</li>
                    <li>Les noms doivent correspondre aux en-têtes Excel</li>
                  </ul>
                </li>
                <li class="mb-2">
                  <strong>Uploadez les deux fichiers et cliquez sur "Générer"</strong>
                </li>
                <li>
                  <strong>Téléchargez le fichier ZIP contenant tous les documents</strong>
                </li>
              </ol>
            </VCardText>
          </VCard>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

// État
const excelFile = ref(null)
const templateFile = ref(null)
const loading = ref(false)
const successMessage = ref(null)
const errorMessage = ref(null)
const templateVariables = ref([])

// Validation
const required = value => {
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return 'Ce champ est requis'
  }
  
  return true
}

// Fonction utilitaire pour extraire le fichier (array ou objet direct)
const getFileFromValue = fileValue => {
  // Debug détaillé
  console.log('=== DEBUG VFileInput ===')
  console.log('Raw value:', fileValue)
  console.log('Type:', typeof fileValue)
  console.log('Is Array?', Array.isArray(fileValue))
  console.log('Is File?', fileValue instanceof File)
  console.log('Constructor:', fileValue?.constructor?.name)
  console.log('=======================')
  
  if (!fileValue)
    return null
  
  // Cas 1: Array de fichiers
  if (Array.isArray(fileValue)) {
    const file = fileValue[0]

    console.log('Array case - First element:', file)
    
    return file || null
  }
  
  // Cas 2: File direct
  if (fileValue instanceof File) {
    console.log('File case - Direct file')
    
    return fileValue
  }
  
  // Cas 3: Object avec une propriété file (certaines versions de Vuetify)
  if (fileValue && typeof fileValue === 'object' && fileValue.file) {
    console.log('Object case - Has file property')
    
    return fileValue.file
  }
  
  // Cas 4: Retour direct si c'est un objet ressemblant à un File
  if (fileValue && typeof fileValue === 'object' && fileValue.name && fileValue.size) {
    console.log('File-like object case')
    
    return fileValue
  }
  
  console.warn('Unknown file format:', fileValue)
  
  return null
}

// Fonction pour obtenir les variables du template
const getTemplateVariables = async () => {
  const file = getFileFromValue(templateFile.value)
  
  if (!file || !(file instanceof File)) {
    errorMessage.value = 'Veuillez sélectionner un template Word'
    
    return
  }

  loading.value = true
  errorMessage.value = null
  templateVariables.value = []

  try {
    const formData = new FormData()

    formData.append('template_file', file)

    const response = await axios.post('/api/template-variables', formData)

    if (response.data.success) {
      templateVariables.value = response.data.variables
      successMessage.value = `${response.data.variables.length} variable(s) trouvée(s)`
      setTimeout(() => {
        successMessage.value = null
      }, 3000)
    }
  } catch (err) {
    errorMessage.value = err.response?.data?.message || 'Erreur lors de la lecture du template'
    console.error('Erreur:', err)
  } finally {
    loading.value = false
  }
}

// Fonction pour générer les documents
const generateDocuments = async () => {
  const excelFileObj = getFileFromValue(excelFile.value)
  const templateFileObj = getFileFromValue(templateFile.value)
  
  if (!excelFileObj || !templateFileObj) {
    errorMessage.value = 'Veuillez sélectionner les deux fichiers'
    
    return
  }

  // Vérifier que les fichiers sont bien des objets File
  if (!(excelFileObj instanceof File) || !(templateFileObj instanceof File)) {
    errorMessage.value = 'Les fichiers sélectionnés ne sont pas valides'
    
    return
  }

  loading.value = true
  errorMessage.value = null
  successMessage.value = null

  try {
    const formData = new FormData()

    // Debug avant envoi
    console.log('=== SENDING TO SERVER ===')
    console.log('Excel file:', excelFileObj)
    console.log('Excel file name:', excelFileObj?.name)
    console.log('Excel file type:', excelFileObj?.type)
    console.log('Excel file size:', excelFileObj?.size)
    console.log('Template file:', templateFileObj)
    console.log('Template file name:', templateFileObj?.name)
    console.log('Template file type:', templateFileObj?.type)
    console.log('Template file size:', templateFileObj?.size)
    console.log('========================')

    formData.append('excel_file', excelFileObj)
    formData.append('template_file', templateFileObj)

    const response = await axios.post('/api/generate-documents', formData, {
      responseType: 'blob',
    })

    // Télécharger le fichier ZIP
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')

    link.href = url
    
    // Extraire le nom du fichier de la réponse si disponible
    const contentDisposition = response.headers['content-disposition']
    let fileName = 'documents_generes.zip'
    if (contentDisposition) {
      const fileNameMatch = contentDisposition.match(/filename="?([^"]+)"?/)
      if (fileNameMatch && fileNameMatch[1]) {
        fileName = fileNameMatch[1]
      }
    }
    
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)

    successMessage.value = 'Documents générés avec succès ! Le téléchargement va commencer...'
    
    // Réinitialiser le formulaire
    setTimeout(() => {
      excelFile.value = null
      templateFile.value = null
      templateVariables.value = []
    }, 2000)

  } catch (err) {
    if (err.response?.data instanceof Blob) {
      // Convertir le Blob en texte pour lire le message d'erreur
      const text = await err.response.data.text()
      try {
        const errorData = JSON.parse(text)

        errorMessage.value = errorData.message || 'Erreur lors de la génération des documents'
      } catch {
        errorMessage.value = 'Erreur lors de la génération des documents'
      }
    } else {
      errorMessage.value = err.response?.data?.message || 'Erreur lors de la génération des documents'
    }
    console.error('Erreur:', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
code {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

ol, ul {
  line-height: 1.8;
}
</style>

