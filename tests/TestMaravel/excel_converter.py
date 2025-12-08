#!/usr/bin/env python3
"""
Script de conversion de nombres en lettres pour fichiers Excel
Convertit les colonnes numériques en leur équivalent textuel en français
"""

import sys
import argparse
import pandas as pd
from num2words import num2words
from pathlib import Path


def format_number_human(number):
    """
    Formate un nombre au format humain (espaces pour milliers, virgule pour décimales)
    
    Args:
        number: Le nombre à formater
    
    Returns:
        str: Le nombre formaté au format humain
    """
    try:
        # Gérer les valeurs NaN ou None
        if pd.isna(number):
            return ""
        
        # Convertir en nombre si c'est une chaîne
        if isinstance(number, str):
            try:
                number = float(number)
            except ValueError:
                return ""
        
        if isinstance(number, (int, float)):
            # Arrondir à 2 décimales pour les nombres à virgule
            if isinstance(number, float):
                number = round(number, 2)
            
            # Séparer partie entière et décimale
            if isinstance(number, int) or number.is_integer():
                partie_entiere = int(number)
                partie_decimale = 0
            else:
                partie_entiere = int(number)
                partie_decimale = round((number - partie_entiere) * 100)
            
            # Formater la partie entière avec espaces pour les milliers
            partie_entiere_str = f"{partie_entiere:,}".replace(",", " ")
            
            # Ajouter la partie décimale si nécessaire
            if partie_decimale > 0:
                return f"{partie_entiere_str},{partie_decimale:02d}"
            else:
                return partie_entiere_str
        
        return ""
    
    except Exception as e:
        print(f"Erreur lors du formatage de {number}: {e}", file=sys.stderr)
        return ""


def convert_number_to_french(number):
    """
    Convertit un nombre en sa représentation textuelle en français
    
    Args:
        number: Le nombre à convertir (int, float, ou autre)
    
    Returns:
        str: La représentation textuelle du nombre en français, ou chaîne vide si non numérique
    """
    try:
        # Gérer les valeurs NaN ou None
        if pd.isna(number):
            return ""
        
        # Convertir en nombre si c'est une chaîne
        if isinstance(number, str):
            # Essayer de convertir la chaîne en nombre
            try:
                number = float(number)
            except ValueError:
                return ""
        
        # Vérifier si c'est un nombre entier ou décimal
        if isinstance(number, (int, float)):
            # Arrondir à 2 décimales pour les nombres à virgule
            if isinstance(number, float):
                number = round(number, 2)
            
            # Pour les entiers, utiliser directement num2words
            if isinstance(number, int) or number.is_integer():
                return num2words(int(number), lang='fr')
            else:
                # Pour les décimaux, gérer la partie entière et décimale séparément
                partie_entiere = int(number)
                partie_decimale = round((number - partie_entiere) * 100)
                
                texte_entier = num2words(partie_entiere, lang='fr')
                
                if partie_decimale > 0:
                    texte_decimal = num2words(partie_decimale, lang='fr')
                    return f"{texte_entier} virgule {texte_decimal}"
                else:
                    return texte_entier
        
        return ""
    
    except Exception as e:
        print(f"Erreur lors de la conversion de {number}: {e}", file=sys.stderr)
        return ""


def process_excel_file(input_file, output_file=None):
    """
    Traite un fichier Excel en ajoutant des colonnes avec les nombres en lettres
    
    Args:
        input_file: Chemin vers le fichier Excel d'entrée
        output_file: Chemin vers le fichier Excel de sortie (optionnel)
    """
    try:
        # Lire le fichier Excel
        print(f"📖 Lecture du fichier: {input_file}")
        df = pd.read_excel(input_file)
        
        print(f"✅ Fichier chargé avec succès: {len(df)} lignes, {len(df.columns)} colonnes")
        
        # Parcourir toutes les colonnes
        colonnes_traitees = 0
        for col_name in df.columns:
            # Vérifier si la colonne contient des données numériques
            col_data = df[col_name]
            
            # Déterminer si la colonne est numérique
            is_numeric = False
            
            # Vérifier le type de la colonne
            if pd.api.types.is_numeric_dtype(col_data):
                is_numeric = True
            else:
                # Vérifier si on peut convertir les valeurs en nombres
                non_null_values = col_data.dropna()
                if len(non_null_values) > 0:
                    try:
                        # Essayer de convertir en float
                        pd.to_numeric(non_null_values, errors='raise')
                        is_numeric = True
                    except (ValueError, TypeError):
                        is_numeric = False
            
            # Si la colonne est numérique, ajouter une colonne _FR et formater la colonne originale
            if is_numeric:
                new_col_name = f"{col_name}_FR"
                print(f"🔢 Traitement de la colonne: {col_name} -> {new_col_name}")
                
                # Formater la colonne originale au format humain
                df[col_name] = col_data.apply(format_number_human)
                
                # Appliquer la conversion en lettres françaises
                df[new_col_name] = col_data.apply(convert_number_to_french)
                
                # Insérer la nouvelle colonne juste après la colonne d'origine
                col_index = df.columns.get_loc(col_name)
                cols = df.columns.tolist()
                # Retirer la nouvelle colonne de la fin
                cols.remove(new_col_name)
                # L'insérer après la colonne d'origine
                cols.insert(col_index + 1, new_col_name)
                # Réorganiser le DataFrame
                df = df[cols]
                
                colonnes_traitees += 1
        
        if colonnes_traitees == 0:
            print("⚠️  Aucune colonne numérique trouvée dans le fichier")
            return
        
        # Déterminer le nom du fichier de sortie
        if output_file is None:
            input_path = Path(input_file)
            output_file = input_path.parent / f"{input_path.stem}_converti{input_path.suffix}"
        
        # Sauvegarder le résultat
        print(f"💾 Sauvegarde du résultat dans: {output_file}")
        df.to_excel(output_file, index=False, engine='openpyxl')
        
        print(f"✅ Traitement terminé avec succès!")
        print(f"   - {colonnes_traitees} colonne(s) numérique(s) traitée(s)")
        print(f"   - Fichier de sortie: {output_file}")
    
    except FileNotFoundError:
        print(f"❌ Erreur: Le fichier '{input_file}' n'existe pas", file=sys.stderr)
        sys.exit(1)
    
    except Exception as e:
        print(f"❌ Erreur lors du traitement du fichier: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        sys.exit(1)


def main():
    """Point d'entrée principal du script"""
    parser = argparse.ArgumentParser(
        description="Convertit les colonnes numériques d'un fichier Excel en texte français",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Exemples d'utilisation:
  %(prog)s fichier.xlsx
  %(prog)s donnees.xlsx -o resultat.xlsx
  %(prog)s /chemin/vers/fichier.xlsx --output /chemin/vers/sortie.xlsx
        """
    )
    
    parser.add_argument(
        'input_file',
        help="Chemin vers le fichier Excel d'entrée"
    )
    
    parser.add_argument(
        '-o', '--output',
        dest='output_file',
        help="Chemin vers le fichier Excel de sortie (par défaut: <input>_converti.xlsx)"
    )
    
    args = parser.parse_args()
    
    # Traiter le fichier
    process_excel_file(args.input_file, args.output_file)


if __name__ == "__main__":
    main()

