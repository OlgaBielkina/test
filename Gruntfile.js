module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    var modRewrite = require('connect-modrewrite');

    grunt.initConfig({
        // Clean target directories
        clean: {
             source:    [ /* Nothing to clean, since dev environment is using source directory to run */ ]
            ,optimized: [ 'dist/webapp/', 'build' ]
        }
        ,copy: {
             source:    [ /* Nothing to copy */ ]
            ,optimized: {
                files: [{ 
                     expand:    true
                    ,flatten:   true
                    ,src:       'app/images/*'
                    ,dest:      'dist/webapp/images'
                },{
                     expand:    true
                    ,flatten:   true
                    ,src:       'app/fonts/*'
                    ,dest:      'dist/webapp/fonts'
                }]
            }
        }
        // Compile all scripts and their dependencies into a single file using r.js
        ,requirejs: {
            source: {
                // 
            }
            ,optimized: {
                options: {
                     almond:            true
                    ,wrap:              true
                    ,findNestedDependencies: true
                    ,include:           [ 'config/main' ]
                    ,insertRequire:     [ 'config/main' ]
                    ,name:              '../vendors/almond/almond'
                    ,baseUrl:           'app/scripts'
                    ,mainConfigFile:    'app/scripts/config/main.js'
                    ,out:               'dist/webapp/scripts/package.js'
                }
            }
        }
        // Run predefined tasks whenever watched file patterns are added, changed or deleted
        ,watch: {
            scripts: {
                // Files to watch
                files: [ '/js/**/*.js' ]
                // Tasks to run on file change
                ,tasks: []
            }
            ,styles: {
                options: {
                    livereload: true
                }
                // Files to watch
                ,files: [ '**/*.less' ]
                // Tasks to run on file change
                ,tasks: [ 'less:source', 'autoprefixer:source' ]
            }
        },
        // Serve the files of the project on specified port and hostname
        connect: {
            options: {
                port: 8000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                 livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            modRewrite([
                                  '!\\.html|\\.js|\\.css|\\.png|\\.jpg|\\.eot|\\.woff|\\.pdf|\\.gif|\\.svg$ /index.html [L]'
                            ]),
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static()
                        ];
                    }
                }
            }
        }
    });

    // taskSet :: for building application source files
        grunt.registerTask('build:source', [
            // Clean the target directory
            'clean:source'
            // Copy files within specified directory into target directory
            ,'copy:source'
            // Compile source less files and copy package.css to the target directory
            ,'less:source'
            // Process final css file by adding vendor prefixes
            ,'autoprefixer:source'
            // Compile an index.html file for development and put it into the target directory
            ,'preprocess:source'
            // Increment a 0.0.x version of the app, throughout all config files
            ,'version:patch'
        ]);

        /*
            Build and optimize source files

            Builds web application's assets for these to become suitable for distribution.
            Basically we squeeze down all of the javascript files with templates
            into a single file called package.js.
            The very same thing happens to less files,
            they end up being a part of the one and only package.css file.
            We also smartly process the index.html file for it to include dependencies
            based on new environment and copy everything we've generated to the target directory.
        */
        grunt.registerTask('build:optimized', [
            // Clean the target directory
            'clean:optimized'
            // Copy files within specified directory into target directory
            ,'copy:optimized'
            // Compile source less files and copy package.css to the target directory
            ,'less:optimized'
            // Process final css file by adding vendor prefixes
            ,'autoprefixer:optimized'
            // Compile an index.html file for development and put it into the target directory
            ,'preprocess:optimized'
            // Fetch all dependencies and uglify everything into a single package.js file
            ,'requirejs:optimized'
            // Increment a 0.0.x version of the app, throughout all config files
            ,'version:patch'
        ]);
    // end of taskSet

    // taskSet :: for running web based version of the app

        // Build a development version
        grunt.registerTask('run:web:dev', [
            // Build a development version of static resources
            'build:web:dev'
            // Start a local webserver
            ,'connect:dev'
            // Watch target directory and perform specified tasks, whenever file changes
            ,'watch'
        ]);

        // Build a UAT version
        grunt.registerTask('run:web:uat', [
            // Build a UAT version of static resources
            'build:web:uat'
            // Start a local webserver
            ,'connect:uat'
            // Watch target directory and perform specified tasks, whenever file changes
            ,'watch'
        ]);

        // Build a Prod version
        grunt.registerTask('run:web:prod', [
            // Build a PROD version of static resources
            'build:web:prod'
            // Start a local webserver
            ,'connect:prod'
            // Watch target directory and perform specified tasks, whenever file changes
            ,'watch'
        ]);
    // end of taskSet
};