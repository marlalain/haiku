/** @jsx h */

import blog, {redirects, h} from "blog";

blog({
    title: "alex's haikus",
    description: "haikus about tech and stuff",
    showHeaderOnPostPage: true,
    // header: <header>Your custom header</header>,
    // section: <section>Your custom section</section>,
    // footer: <footer>Your custom footer</footer>,
    avatar: "https://cdn.upload.systems/uploads/EWwItQHa.jpg",
    avatarClass: "rounded-full",
    author: "Alex",
    lang: "en",
    links: [
        {
            title: "Email",
            url: "mailto:haikus@alexaa.dev"
        },
        {
            title: "GitHub",
            url: "https://github.com/minsk-dev"
        },
        {
            title: "Twitter",
            url: "https://twitter.com/alexsyntaxtree"
        },
        {
            title: "Curriculum",
            url: "https://alexaa.dev"
        }
    ],
    middlewares: [

        // If you want to set up Google Analytics, paste your GA key here.
        // ga("UA-XXXXXXXX-X"),

        // If you want to provide some redirections, you can specify them here,
        // pathname specified in a key will redirect to pathname in the value.
        redirects({
            "/hello_world.html": "/hello_world",
        }),

    ]
});
