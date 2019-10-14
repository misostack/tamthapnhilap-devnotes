---
title: "Rails 002 - Cheatsheets"
type: "article"
date: 2018-10-30T10:17:23+07:00
description: "Rails 002 Cheatsheets"
keywords: ["Rails 002 Cheatsheets"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

## Routes cheatsheet

{{<command-table>}}
    {{<command-table-row "root to: 'home#index'" "Root URL, should place at the end">}}
    {{<command-table-row "TOP to BOTTOM" "route priority is from top to bottom">}}    
{{</command-table>}}

```ruby
Rails.application.routes.draw do
  get '/ping', {to: 'home#ping'} # run
  get '/ping', {to: 'home#index'} # never run
  get '/download/:type', to: 'home#download'
  get '/fetch(/:type)', to: 'home#fetch'
  get '/redirect', to: 'home#redirect'
  namespace :status do
    get '/messages/ping', to: 'messages#ping'
    get '/messages/sample-app', to: 'messages#sampleapp'
    resources :messages
    root to: 'messages#index'
  end
  namespace :auth do
    get '/basic', to: 'basic#index'
    get '/digest', to: 'digest#index'
  end
  root to: "home#index"
end
```
## Rake tasks

```ruby
$ rake --tasks
rake about                              # List versions of all Rails framew...
rake active_storage:install             # Copy over the migration needed to...
rake app:template                       # Applies the template supplied by ...
rake app:update                         # Update configs and some other ini...
rake assets:clean[keep]                 # Remove old compiled assets
rake assets:clobber                     # Remove compiled assets
rake assets:environment                 # Load asset compile environment
rake assets:precompile                  # Compile all the assets named in c...
rake cache_digests:dependencies         # Lookup first-level dependencies f...
rake cache_digests:nested_dependencies  # Lookup nested dependencies for TE...
rake db:create                          # Creates the database from DATABAS...
rake db:drop                            # Drops the database from DATABASE_...
rake db:environment:set                 # Set the environment value for the...
rake db:fixtures:load                   # Loads fixtures into the current e...
rake db:migrate                         # Migrate the database (options: VE...
rake db:migrate:status                  # Display status of migrations
rake db:rollback                        # Rolls the schema back to the prev...
rake db:schema:cache:clear              # Clears a db/schema_cache.yml file
rake db:schema:cache:dump               # Creates a db/schema_cache.yml file
rake db:schema:dump                     # Creates a db/schema.rb file that ...
rake db:schema:load                     # Loads a schema.rb file into the d...
rake db:seed                            # Loads the seed data from db/seeds.rb
rake db:setup                           # Creates the database, loads the s...
rake db:structure:dump                  # Dumps the database structure to d...
rake db:structure:load                  # Recreates the databases from the ...
rake db:version                         # Retrieves the current schema vers...
rake dev:cache                          # Toggle development mode caching o...
rake haml:erb2haml                      # Convert html.erb to html.haml eac...
rake initializers                       # Print out all defined initializer...
rake log:clear                          # Truncates all/specified *.log fil...
rake middleware                         # Prints out your Rack middleware s...
rake notes                              # Enumerate all annotations (use no...
rake notes:custom                       # Enumerate a custom annotation, sp...
rake restart                            # Restart app by touching tmp/resta...
rake routes                             # Print out all defined routes in m...
rake secret                             # Generate a cryptographically secu...
rake spec                               # Run all specs in spec directory (...
rake spec:models                        # Run the code examples in spec/models
rake stats                              # Report code statistics (KLOCs, et...
rake test                               # Runs all tests in test folder exc...
rake test:db                            # Run tests quickly, but also reset db
rake test:system                        # Run system tests only
rake time:zones[country_or_offset]      # List all time zones, list by two-...
rake tmp:clear                          # Clear cache, socket and screensho...
rake tmp:create                         # Creates tmp directories for cache...
rake yarn:install                       # Install all JavaScript dependenci...
```

## Controller cheatsheet

## View cheatsheet

## Model cheatsheet

### ActiveRecord

- [Official](https://guides.rubyonrails.org/active_record_migrations.html)
- [Timestamp vs DateTime Story](https://stackoverflow.com/questions/3928275/in-ruby-on-rails-whats-the-difference-between-datetime-timestamp-time-and-da)

```ruby
1.:datetime (8 bytes)

Stores Date and Time formatted YYYY-MM-DD HH:MM:SS
Useful for columns like birth_date ( Valid ranges go from the year 1000 to the year 9999 )

2.:timestamp (4 bytes)
Stores number of seconds since 1970-01-01 ( Its valid range goes from 1970 to 2038 )
Useful for columns like updated_at, created_at

3.:date (3 bytes)
Stores Date

4.:time (3 bytes)
Stores Time
```

- [Timezone](https://apidock.com/rails/TimeZone)

```ruby
rails console
TZInfo::Timezone.all
```

- [Naming Convention](https://launchbylunch.com/posts/2014/Feb/16/sql-naming-conventions/)

{{<command-table>}}
    {{<command-table-row "rails generate migration CreateProducts" "Create new migration">}}
    {{<command-table-row "rails generate models game/teams" "Create new model + activecord Lol:Teams">}}
    {{<command-table-row "rails destroy models game/teams" "Delete model + activecord Lol:Teams">}}
{{</command-table>}}

- Where to find ? [connection adapter](https://github.com/rails/rails/tree/master/activerecord/lib/active_record/connection_adapters)

**Possible DataTypes in Active Record with Sqlite**

{{<command-table thead="ActiveRecord,Sqlite,Note">}}
    <tr>
        {{<custom-table-column th="true" content="primary">}}
        {{<custom-table-column content="integer PRIMARY KEY AUTOINCREMENT NOT NULL">}}
        {{<custom-table-column content="">}}
    </tr>
    <tr>
        {{<custom-table-column th="true" content="string">}}
        {{<custom-table-column content="varchar(255)">}}
        {{<custom-table-column content="maximum is 255 characters">}}
    </tr>
    <tr>
        {{<custom-table-column th="true" content="text">}}
        {{<custom-table-column content="text">}}
        {{<custom-table-column content="maximum is 2^16-1 = 65535 characters">}}
    </tr>
    <tr>
        {{<custom-table-column th="true" content="integer">}}
        {{<custom-table-column content="integer">}}
        {{<custom-table-column content="The value is a signed integer, stored in 1, 2, 3, 4, 6, or 8 bytes depending on the magnitude of the value. MAX: 2^63-1 = 9223372036854775807">}}
    </tr>
{{</command-table>}}

**Integer**

```ruby
def type_to_sql(type, limit = nil, precision = nil, scale = nil)
  return super unless type.to_s == 'integer'

  case limit
  when 1; 'tinyint'
  when 2; 'smallint'
  when 3; 'mediumint'
  when nil, 4, 11; 'int(11)'  # compatibility with MySQL default
  when 5..8; 'bigint'
  else raise(ActiveRecordError, "No integer type has byte size #{limit}")
  end
end

# ActiveRecord Migrate
create_table 'example' do |t|
  t.integer :int                 # int (4 bytes, max 2,147,483,647)
  t.integer :int1, :limit => 1   # tinyint (1 byte, -128 to 127)
  t.integer :int2, :limit => 2   # smallint (2 bytes, max 32,767)
  t.integer :int3, :limit => 3   # mediumint (3 bytes, max 8,388,607)
  t.integer :int4, :limit => 4   # int (4 bytes)
  t.integer :int5, :limit => 5   # bigint (8 bytes, max 9,223,372,036,854,775,807)
  t.integer :int8, :limit => 8   # bigint (8 bytes)
  t.integer :int11, :limit => 11 # int (4 bytes)
end
```

```bash
    primary_key:  "integer PRIMARY KEY AUTOINCREMENT NOT NULL",
    string:       { name: "varchar" },
    text:         { name: "text" },
    integer:      { name: "integer" },
    float:        { name: "float" },
    decimal:      { name: "decimal" },
    datetime:     { name: "datetime" },
    time:         { name: "time" },
    date:         { name: "date" },
    binary:       { name: "blob" },
    boolean:      { name: "boolean" },
    json:         { name: "json" },
```

**Homework**

```ruby
Team : {
    name: "Fnatic League Of Legend",
    short_name: "fnatic lol",
    introduction: "
    Once young pups of the black and orange flag, ‘Rekkles’ and the returning warrior, ‘sOAZ’ head up the Fnatic League of Legends squad, leading now as seasoned wolves, still hungry for success after so many years at the top.

    Joined on the Rift by our Jungler, Broxah, promoted from our Challenger Series team and the veteran ‘Jesiz’ taking the reigns at Support, this new look roster is built on pillars of game knowledge, raw talent and experience with 20 years of professional play combined.

    The lineup is completed by Baby Faker himself; the mechanical maestro, 'Caps', starts his rookie year in the Fnatic Mid lane. The exceptionally gifted youngster has already shown his talents, taking down opposition vastly more experienced than himself.

    Fierce, meticulously prepared, and with the right network of support, this fully European roster now mounts its charge back to the summit of the EU LCS.    
    ",
    earned_money: 1,190,043,
    world_ranking: 2,
    rating: 1,374,
    win: 290,
    lose: 154,
    rematch: 6,
    win_rate: 0.64  
    archivements: [
        {
            tournament: "EUROPEAN LEAGUE OF LEGENDS CHAMPIONSHIP SERIES",
            achievements: [
                { type: "Split Champions", season: "Spring", year: "2013" },
                { type: "Playoff Champions", season: "Spring", year: "2013" },
                { type: "Split Champions", season: "Spring", year: "2014" },
                { type: "Split Champions", season: "Summer", year: "2014" },
                { type: "Split Champions", season: "Summer", year: "2015" }
            ]
        },
        {
            tournament: "WORLD CHAMPIONSHIPS",
            achievements: [
                { type: "Champion", season: "", year: "2011" },
                { type: "Semi Finalists", season: "", year: "2013" },
                { type: "Semi Finalists", season: "", year: "2015" },
                { type: "Quarter Finalists", season: "", year: "2017" },
            ]
        },
        {
            tournament: "INVITATIONALS",
            achievements: [
                { type: "DreamHack Winter 2012", season: "Champions", year: "2012" },
                { type: "Rift Rivals", season: "3rd - 4th", year: "2017" },                
            ]            
        }
    ]
}
```

```ruby
Player : {
    last_name: "Larsson",
    first_name: "Margin",
    player_name: "Rekkles",
    game: "League Of Legends",
    role: "ADC",
    country: "Sweden",
    hometown: "Göteborg",
    games_won: "47",
    kills:"267",
    deaths:"73",
    date_of_birth:"1996-09-20",
    image: "binary...",
    biography: "Entering the European professional scene as a mechanical prodigy, the former fledgling is now an experienced leader for Fnatic.
    An iconic AD Carry, Rekkles's relentless determination to win is only matched by calculated domination of the bot lane. With his eyes now fixed on returning to Worlds, he's fully focused on tearing it up on the rift in the 2017.",
    team: "lol",
    likes: [
        {"subject": "food", 
            "object": {
                "title: "tacos",
                "image":"http://example.com/images/tacos.png"
            }
        },
        {"subject": "pastime", 
            "object": {
                "title: "going to gym",
                "image":"http://example.com/images/gym.png"
            }
        },
        {"subject": "genre", 
            "object": {
                "title: "sci-fi",
                "image":"http://example.com/images/sci-fi.png"
            }
        },
        {"subject": "tv show", 
            "object": {
                "title: "prison break",
                "image":"http://example.com/images/prison-break.png"
            }
        },
        {"subject": "travel destination", 
            "object": {
                "title: "Australia",
                "image":"http://example.com/images/australia.png"
            }
        },        
    ]
}
```