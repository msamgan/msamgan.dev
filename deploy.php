<?php

namespace Deployer;

require 'recipe/laravel.php';

// Config

set('repository', 'https://github.com/msamgan/msamgan.dev.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

host('146.190.32.125')
    ->set('remote_user', 'msamgan_dev')
    ->set('deploy_path', '~/htdocs/msamgan.dev')
    ->set('writable_mode', 'chmod');

desc('Build the assets');
task('build', function () {
    cd('{{release_path}}');
    run('npm install');
    run('npm run build');
});

task('optimize', function () {
    cd('{{release_path}}');
    run('php artisan optimize');
});

task('clear_cache', function () {
    cd('{{current_path}}');
    run('php artisan cache:clear');
});

after('deploy:vendors', 'build');
after('deploy:symlink', 'optimize');

// Hooks

after('deploy:failed', 'deploy:unlock');
