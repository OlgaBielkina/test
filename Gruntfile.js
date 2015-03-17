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
            // ,styles: {
            //     options: {
            //         livereload: true
            //     }
            //     // Files to watch
            //     ,files: [ '**/*.less' ]
            //     // Tasks to run on file change
            //     ,tasks: [ 'less:source', 'autoprefixer:source' ]
            // }
        },
        // Serve the files of the project on specified port and hostname
        connect: {
          server: {
            options: {
              port: 8000,
              hostname: 'localhost'
            }
          },
          test: {
            options: {
              port: 9001,
              hostname: 'localhost'
            }
        }
    },

        open: {
          test: {
            path: 'http://localhost:9001/_SpecRunner.html',
            app: 'Google Chrome'
          }
        },
        
        jasmine: {
            taskName: {
              options: {
                vendor: 'bower_components/requirejs/require.js',
                specs: ['tests/customMatchers.js', 'tests/**/*Test.js'],
                //helpers: 'tests/*Helper.js',
                host: 'http://localhost:9001/',
                keepRunner: true
              }
            }
        }
    });

    // taskSet :: for running web based version of the app

        // Build a development version
        grunt.registerTask('server:dev', [
            // Start a local webserver
            'connect:server',
            // Watch target directory and perform specified tasks, whenever file changes
            'watch'
        ]);
        // Build a development version
        grunt.registerTask('test', [
            // Start a local webserver
            'connect:test',
            'open:test',
            'jasmine'  
        ]);
};