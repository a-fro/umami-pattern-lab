# Installation

1. Install Lando + Docker
1. Setup


### Install Lando


### Setup

   - `lando start`
   - `lando composer install`

   Here we are deviating from the Lando drupal scaffold approach in order to maintain individual environment settings via settings.local.php and avoid committing local configuration.

   - `cp web/sites/example.settings.local.php web/sites/default/settings.local.php`
   - Run `lando info` to get db info and add to settings.local.php, which generally will be:

```
/** Database */
$databases['default']['default'] = array(
    'database' => 'drupal8',
    'username' => 'drupal8',
    'password' => 'drupal8',
    'host' => 'database',
    'port' => '3306',
    'driver' => 'mysql',
    'prefix' => '',
    'collation' => 'utf8mb4_general_ci',
);
```

   - `lando drush si demo_umami --account-pass=admin --account-name="admin" -y`


