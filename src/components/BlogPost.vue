<template lang="">
    <div class="blog-wrapper no-user">
        <div class="blog-content">
            <div>
                <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
                <h2 v-else>{{ post.title }}</h2>
                <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
                <p v-else class="content-preview">{{ post.blogHTML }}</p>
                <router-link  class="link link-light" v-if="post.welcomeScreen" to="#">Login/Register
                    <Arrow class="arrow arrow-light"/>
                </router-link>
                <router-link  class="link" v-else to="#">View The Post
                    <Arrow class="arrow"/>
                </router-link>
            </div>
        </div>
        <div class="blog-photo">
                <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="">
                <img v-else :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"  alt="">
        </div>
    </div>
</template>
<script>
import Arrow from '../assets/Icons/arrow-right-light.svg'

export default {
    name: 'BlogPost',
    components: {
        Arrow,
    },
    props: {
        post: Object
    }
}
</script>
<style scoped>
    .blog-wrapper {
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    @media(min-width: 700px) {
        .blog-wrapper {
            min-height: 650px;
            max-height: 650px;
            flex-direction: row;
        }
    }

    .blog-wrapper .blog-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 4;
        order: 2;
    }

    @media(min-width: 700px) {
        .blog-wrapper .blog-content {
            order: 1
        }
    }
    @media(min-width: 800px) {
        .blog-wrapper .blog-content {
            flex: 3
        }
    }
    .blog-content div {
        max-width: 375px;
        padding: 72px 24px;
    }
    @media(min-width: 700px) {
        .blog-content div {
            padding: 0 24px;
        }
    }

    .blog-content div h2 {
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
    }

    @media(min-width: 700px) {
        .blog-content div h2 {
            font-size: 40px;
        }
    }

    .blog-content div p {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.7;
    }
    
    .content-preview {
        font-size: 13px;
        max-height: 24px;
        white-space: nowrap;
        width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .link {
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: .5s ease-in all;
    }
    
    .link:hover {
        border-bottom-color: #303030;
    }

    .link-light:hover {
        border-bottom-color: white;
    }

    .blog-photo {
        order: 1;
        flex: 3;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    @media(min-width: 700px) {
        .blog-photo {
            order: 2;
        }
    }
    @media(min-width: 800px) {
        .blog-photo {
            flex: 4;
        }
    }
    .blog-photo img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .blog-wrapper:nth-child(even) .blog-content {
        order: 2
    }
    .blog-wrapper:nth-child(even) .blog-photo {
        order: 1
    }

    .no-user:first-child .blog-content {
        background-color: #303030;
        color: white;
    }

</style>