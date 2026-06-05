<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * Exemple de modèle User pour utiliser avec la librairie Laravel API Controller
 * 
 * Ce modèle montre comment structurer un modèle Eloquent pour
 * qu'il fonctionne parfaitement avec l'APIController.
 */
class User extends Authenticatable
{
	use HasApiTokens, HasFactory, Notifiable;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
		'name',
		'email',
		'password',
		'age',
		'status',
		'role',
		'slug',
		'registration_ip',
		'avatar',
	];

	/**
	 * The attributes that should be hidden for serialization.
	 *
	 * @var array<int, string>
	 */
	protected $hidden = [
		'password',
		'remember_token',
	];

	/**
	 * The attributes that should be cast.
	 *
	 * @var array<string, string>
	 */
	protected $casts = [
		'email_verified_at' => 'datetime',
		'password' => 'hashed',
		'age' => 'integer',
	];

	/**
	 * Relation avec le profil utilisateur
	 */
	public function profile()
	{
		return $this->hasOne(UserProfile::class);
	}

	/**
	 * Relation avec les posts de l'utilisateur
	 */
	public function posts()
	{
		return $this->hasMany(Post::class);
	}

	/**
	 * Relation avec les commentaires de l'utilisateur
	 */
	public function comments()
	{
		return $this->hasMany(Comment::class);
	}

	/**
	 * Scope pour les utilisateurs actifs
	 */
	public function scopeActive($query)
	{
		return $query->where('status', 'active');
	}

	/**
	 * Scope pour les utilisateurs par rôle
	 */
	public function scopeByRole($query, $role)
	{
		return $query->where('role', $role);
	}

	/**
	 * Accessor pour l'avatar complet
	 */
	public function getAvatarUrlAttribute()
	{
		if ($this->avatar) {
			return asset('storage/' . $this->avatar);
		}
		return asset('images/default-avatar.png');
	}

	/**
	 * Accessor pour le nom complet
	 */
	public function getFullNameAttribute()
	{
		return $this->name;
	}

	/**
	 * Mutator pour le slug
	 */
	public function setNameAttribute($value)
	{
		$this->attributes['name'] = $value;
		$this->attributes['slug'] = \Illuminate\Support\Str::slug($value);
	}

	/**
	 * Méthode pour vérifier si l'utilisateur est admin
	 */
	public function isAdmin()
	{
		return $this->role === 'admin';
	}

	/**
	 * Méthode pour vérifier si l'utilisateur a un rôle spécifique
	 */
	public function hasRole($role)
	{
		return $this->role === $role;
	}

	/**
	 * Méthode pour générer un code de référence
	 * Utilisée avec le trait ScriptGeneratorTrait
	 */
	public function generateReferrerCode()
	{
		return strtoupper(substr($this->name, 0, 2) . "-PR-" . str_pad($this->id, 4, '0', STR_PAD_LEFT));
	}

	/**
	 * Méthode pour générer des données supplémentaires
	 * Utilisée avec le trait ControllerHelperTrait
	 */
	public function genUserStats()
	{
		$this->posts_count = $this->posts()->count();
		$this->comments_count = $this->comments()->count();
		$this->last_activity = $this->updated_at;
	}

	/**
	 * Méthode pour générer l'URL du profil
	 */
	public function genProfileUrl()
	{
		$this->profile_url = route('users.show', $this->slug);
	}

	/**
	 * Méthode pour générer les permissions
	 */
	public function genPermissions()
	{
		$permissions = ['read'];

		if ($this->isAdmin()) {
			$permissions = ['read', 'write', 'delete', 'admin'];
		} elseif ($this->role === 'moderator') {
			$permissions = ['read', 'write', 'moderate'];
		}

		$this->permissions = $permissions;
	}
}
