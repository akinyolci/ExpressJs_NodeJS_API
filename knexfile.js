module.exports = {
    development:{
        client:"pg",

        connection:{
            database:"aktorler",
            user:"akin",
            password:"12345"
        },

        migrations:{
            directory: "./data/migrations"
        },

        seeds:{
            directory: "./data/seeds"
        }
    },
    production:{}
}