var jwt = require('jsonwebtoken');

var env = require('dotenv');
env.config();


module.exports = {
    //1. Property:value
    name:"student",

    settings:{},

    dependencies: [],

    actions:{
        register: {
			rest: {
				method: "POST",
				path: "/register"
			},
			async handler(ctx) {
                //Check in the database if the user is already registered
                var token = jwt.sign(ctx.params, process.env.JSON_WEB_TOKEN);
                let res = {
                    msg:"Registered Successfullfuly",
                    token:token
                };
				return res;//"Registered Successfullfuly"+ctx.params.fname;
			}
		},
        login: {
			rest: {
				method: "POST",
				path: "/login"
			},
			async handler(ctx) {
                return ctx.meta.user.email
                
			}
		}, 
    },

    methods:{},

    events:{},

    //2. Methods
    // Life cycle method of service
    created(){},

    started(){},

    stopped(){}
};