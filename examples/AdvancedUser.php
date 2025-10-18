<?php

namespace App\Models;

use LaravelAdvancedApiController\Models\ModelBase;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * Exemple de modèle User enrichi avec ModelBase
 * 
 * Ce modèle démontre toutes les fonctionnalités avancées :
 * - Casts personnalisés automatiques
 * - Formatage des données
 * - Système de permissions
 * - Relations avancées
 */
class AdvancedUser extends Authenticatable
{
	use HasApiTokens, HasFactory, Notifiable;

	protected $appends = ['ability_rules', 'profile_fr', 'full_name'];

	protected $fillable = [
		'first_name',
		'last_name',
		'email',
		'password',
		'profile',
		'is_active',
		'balance',
		'referral_code',
		'referrer_id',
		'last_login',
		'created_by',
		'updated_by',
	];

	protected $hidden = [
		'password',
		'remember_token',
	];

	protected $casts = [
		'email_verified_at' => 'datetime',
		'password' => 'hashed',
		'is_active' => 'boolean',
		'balance' => 'decimal:2',
		'last_login' => 'datetime',
	];

	// Configuration des casts personnalisés avec ModelBase
	protected $money_casts = [
		'balance' => 'balance_formatted'
	];

	protected $boolean_casts = [
		'is_active' => 'is_active_bool'
	];

	protected $date_casts = [
		'last_login' => ['new_name' => 'last_login_fr', 'format' => 'd/m/Y H:i']
	];

	protected $enum_casts = [
		[
			'column_name' => 'profile',
			'choices' => [
				'admin' => 'Administrateur',
				'client' => 'Client',
				'moderator' => 'Modérateur'
			],
			'additional_column_name' => 'profile_fr'
		]
	];

	/**
	 * Accessor pour le nom complet
	 */
	public function getFullNameAttribute()
	{
		return $this->first_name . ' ' . $this->last_name;
	}

	/**
	 * Accessor pour les règles d'abilités (système de permissions)
	 */
	public function getAbilityRulesAttribute()
	{
		return [
			'admin' => [
				[
					'subject' => ['all'],
					'action' => ['manage'],
				],
			],
			'moderator' => [
				[
					'subject' => ['user'],
					'action' => ['read', 'update'],
				],
				[
					'subject' => ['post'],
					'action' => ['read', 'create', 'update', 'delete'],
				],
			],
			'client' => [
				[
					'subject' => ['user'],
					'action' => ['read', 'update'],
				],
				[
					'subject' => ['post'],
					'action' => ['read', 'create'],
				],
				[
					'subject' => ['investment'],
					'action' => ['read', 'create', 'update', 'delete'],
				],
			],
		][$this->profile] ?? [];
	}

	/**
	 * Accessor pour le profil en français
	 */
	public function getProfileFrAttribute()
	{
		return [
			'admin' => 'Administrateur',
			'client' => 'Client',
			'moderator' => 'Modérateur',
		][$this->profile] ?? 'Inconnu';
	}

	/**
	 * Relations
	 */
	public function referrals(): HasMany
	{
		return $this->hasMany(AdvancedUser::class, 'referrer_id');
	}

	public function referrer(): HasOne
	{
		return $this->hasOne(AdvancedUser::class, 'id', 'referrer_id');
	}

	public function investments(): HasMany
	{
		return $this->hasMany(Investment::class);
	}

	public function posts(): HasMany
	{
		return $this->hasMany(Post::class);
	}

	/**
	 * Méthodes utilitaires pour les statistiques
	 */
	public function investment_statistique()
	{
		$total_investments = $this->investments()->count();
		$total_quantity = $this->investments()->sum('quantity');
		$total_purchase_price = $this->investments()->sum('unit_purchase_price');

		$this->investment_statistique = [
			'total_investments' => $total_investments,
			'total_quantity' => $total_quantity,
			'total_purchase_price' => $total_purchase_price,
			'total_variation' => $this->calculateTotalVariation(),
		];
	}

	public function question_statistique()
	{
		$total = $this->question_children()->count();
		$correct = $this->question_children()->where('is_correct', 1)->count();
		$percentage = $total > 0 ? round(($correct / $total) * 100, 2) : 0;

		$this->question_statistique = [
			'total_responses' => $total,
			'correct_responses' => $correct,
			'percentage_correct' => $percentage,
		];
	}

	public function nb_referrals()
	{
		$this->nb_referrals = $this->referrals()->count();
	}

	/**
	 * Méthodes de vérification des permissions
	 */
	public function isAdmin()
	{
		return $this->profile === 'admin';
	}

	public function isModerator()
	{
		return $this->profile === 'moderator';
	}

	public function isClient()
	{
		return $this->profile === 'client';
	}

	public function hasProfile($profile)
	{
		return $this->profile === $profile;
	}

	/**
	 * Méthodes pour la génération de données (utilisées avec les traits)
	 */
	public function genUserStats()
	{
		$this->posts_count = $this->posts()->count();
		$this->investments_count = $this->investments()->count();
		$this->referrals_count = $this->referrals()->count();
		$this->last_activity = $this->updated_at;
	}

	public function genProfileUrl()
	{
		$this->profile_url = route('users.show', $this->id);
	}

	public function genPermissions()
	{
		$permissions = ['read'];

		if ($this->isAdmin()) {
			$permissions = ['read', 'write', 'delete', 'admin'];
		} elseif ($this->isModerator()) {
			$permissions = ['read', 'write', 'moderate'];
		} elseif ($this->isClient()) {
			$permissions = ['read', 'write'];
		}

		$this->permissions = $permissions;
	}

	/**
	 * Méthodes privées
	 */
	private function calculateTotalVariation()
	{
		$total_variation = 0;
		foreach ($this->investments as $investment) {
			$action = Action::find($investment->action_id);
			if ($action) {
				$total_variation += ($action->current_course - $investment->unit_purchase_price) * $investment->quantity;
			}
		}
		return $total_variation;
	}

	/**
	 * Scopes
	 */
	public function scopeActive($query)
	{
		return $query->where('is_active', true);
	}

	public function scopeByProfile($query, $profile)
	{
		return $query->where('profile', $profile);
	}

	public function scopeWithBalance($query, $minBalance = 0)
	{
		return $query->where('balance', '>=', $minBalance);
	}
}
