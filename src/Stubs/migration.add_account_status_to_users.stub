<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'activated')) {
                $table->boolean('activated')->default(true)->after('email');
            }
            if (!Schema::hasColumn('users', 'password_change_required')) {
                $table->boolean('password_change_required')->default(false)->after('activated');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'activated')) {
                $table->dropColumn('activated');
            }
            if (Schema::hasColumn('users', 'password_change_required')) {
                $table->dropColumn('password_change_required');
            }
        });
    }
};
