


module.exports = {
    //1. Property:value
    name:"teacher",

    settings:{},

    dependencies: [],

    actions:{
        register: {
			rest: {
				method: "POST",
				path: "/register"
			},
			async handler() {
				return "hello from teacher register";
			}
		},

        assignment: {
			rest: {
				method: "GET",
				path: "/assignment"
			},
			async handler(ctx) {
				return ctx.meta.user.fname;
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