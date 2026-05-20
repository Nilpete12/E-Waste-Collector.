public function up(): void
{
    Schema::create('platform_users', function (Blueprint $table) {
        $table->id();
        $table->string('clerk_id')->unique();
        $table->string('name');
        $table->string('email')->unique();
        $table->string('role')->default('user');
        $table->timestamps();
    });
}