<template>
    <div class="hard-skills">
        <sticky-header number="II" title="Hard Skills" />
        <div class="development-areas pa-6">
            <h3 class="dark-gray--text">
                For you or your business
                <span class="accent--text primary px-4 py-2 border-radius-3 text-uppercase">I can build</span>:
            </h3>
            <div class="development-area my-6">
                <div class="development-header d-flex flex-row align-center ma-6">
                    <div class="development-symbol circular-border-radius pa-6 primary">
                        <fa-icon :icon="['fas', 'globe']" class="accent--text size-9" />
                    </div>
                    <h3 class="ml-5 size-8 accent--text bold font-weight-light d-flex flex-row align-center">
                        Web Sites <span class="visible-lg-and-up ml-4 size-6 light-gray--text">// and yours will be even more beautiful than this one, yeah?</span>
                    </h3>
                </div>
                <div class="development-purpose mt-8 ma-6 px-7 d-flex flex-column justify-center align-center">
                    <p class="dark-gray--text size-6 ma-3 line-height-8">
                        Creating websites is the easiest way to <span class="primary white--text px-4 py-3 border-radius-3">get closer to your customers or target audience</span>. From simple ones until the complex e-commerces, I can help you making your dreams come true!
                    </p>
                </div>
                <div class="development-technologies primary pa-8 mt-8">
                    <div class="oblique-divider" />
                    <div class="spacer mt-5" />
                    <div class="d-flex flex-row align-center">
                        <fa-icon :icon="['fas', 'code']" class="accent--text size-7" />
                        <h3 class="accent--text bold font-weight-light size-7 ml-4">
                            Available technologies:
                        </h3>
                    </div>
                    <div class="technologies-container">
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo white pa-4 pt-5 circular-border-radius">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
                                        alt="Logo of Vue.js">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://vuejs.org/">
                                        Vue.js
                                    </a>
                                </h3>
                            </div>
                            <div class="technology-description">
                                <p class="mx-6 dark-gray--text size-6">
                                    This is a reactive framework for developing websites, it was used to develop <span class="primary accent--text px-3 py-2 bold border-radius-3">this</span> résumé and, I can say it personally, it made the task a lot easier.
                                </p>
                            </div>
                        </div>
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo primary pa-3 circular-border-radius">
                                    <img
                                        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                                        alt="Logo of React.js">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://reactjs.org/">
                                        React.js
                                    </a>
                                </h3>
                            </div>
                            <div class="technology-description">
                                <p class="mx-6 dark-gray--text size-6">
                                    Similar to <span class="font-weight-bold">Vue.js</span>, this tool brings a lot of facilities to build websites highly customized, beautiful and interactive with the same tool which <span class="primary white--text px-3 py-2 bold border-radius-3">used by Facebook</span>.
                                </p>
                            </div>
                        </div>
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo primary pa-3 circular-border-radius">
                                    <fa-icon :icon="['fas', 'fingerprint']" class="white--text size-8" />
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    Vanilla
                                </h3>
                            </div>
                            <div class="technology-description ma-4">
                                <p class="mx-6 dark-gray--text size-6">
                                    Even if we can use the most powerful tools, there's nothing like building something from the bottom until the last details. For this purpose, I'm also available for projects which needs the use of standard
                                    <span class="primary accent--text px-3 py-2 bold border-radius-3">HTML</span>,
                                    <span class="primary accent--text px-3 py-2 bold border-radius-3">CSS</span> and
                                    <span class="primary accent--text px-3 py-2 bold border-radius-3">JavaScript</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="development-area my-6">
                <div class="development-header d-flex flex-row align-center ma-6">
                    <div class="development-symbol circular-border-radius pa-6 primary">
                        <fa-icon :icon="['fas', 'server']" class="accent--text size-9" />
                    </div>
                    <h3 class="ml-5 size-8 accent--text bold font-weight-light d-flex flex-row align-center">
                        Web Servers <span class="visible-lg-and-up ml-4 size-6 light-gray--text">// this will process what your customer's device can't do!</span>
                    </h3>
                </div>
                <div class="development-purpose mt-8 ma-6 px-7 d-flex flex-column justify-center align-center">
                    <p class="dark-gray--text size-6 ma-3 line-height-8">
                        Even if your web site is very well developed, creative and interactive, it may need some <span class="primary white--text px-4 py-3 border-radius-3">back-end</span> processing. This is useful if your project manages sensitive data which can't be processed directly in your customer's device.
                    </p>
                </div>
                <div class="development-technologies primary pa-8 mt-8">
                    <div class="oblique-divider" />
                    <div class="spacer mt-5" />
                    <div class="d-flex flex-row align-center">
                        <fa-icon :icon="['fas', 'code']" class="accent--text size-7" />
                        <h3 class="accent--text bold font-weight-light size-7 ml-4">
                            Available technologies:
                        </h3>
                    </div>
                    <div class="technologies-container">
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo white circular-border-radius pa-3">
                                    <img
                                        style="transform: scale(1.5)"
                                        src="https://codeopinion.com/wp-content/uploads/2018/07/Bitmap-MEDIUM_ASP.NET-Core-Logo_2colors_Square_RGB.png"
                                        alt="Logo of ASP.NET Core">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://www.asp.net/core/overview/aspnet-vnext">
                                        ASP.NET Core
                                    </a>
                                </h3>
                                <span class="size-8 mx-4">
                                    +
                                </span>
                                <div class="technology-logo white circular-border-radius pa-3 overflow-hidden">
                                    <img
                                        style="transform: scale(1.5)"
                                        src="https://codeopinion.com/wp-content/uploads/2017/10/Bitmap-MEDIUM_Entity-Framework-Core-Logo_2colors_Square_Boxed_RGB.png"
                                        alt="Logo of Entity Framework Core">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://docs.microsoft.com/en-us/ef/core/">
                                        Entity Framework Core
                                    </a>
                                </h3>
                            </div>
                            <div class="technology-description">
                                <p class="mx-6 dark-gray--text size-6">
                                    Using <span class="font-weight-bold">C#</span> makes the web server development straight and extensible. This is a technology
                                    <span class="primary accent--text px-3 py-2 bold border-radius-3">widely used</span>
                                    and it makes your project easier to be quickly developed, due the great community and features the <span class="font-weight-bold">ASP.NET Core</span> framework provides.
                                    Going further, using
                                    <span class="primary accent--text px-3 py-2 bold border-radius-3">Entity Framework Core</span>
                                    I will connect your web server to a
                                    <span class="primary accent--text px-3 py-2 bold border-radius-3">SQL Server</span>
                                    database and your data will be safely stored.
                                </p>
                            </div>
                        </div>
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo primary pa-3 circular-border-radius">
                                    <img
                                        src="http://yawintutor.com/images/home/spring.png"
                                        alt="Logo of Spring">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://spring.io/">
                                        Spring
                                    </a>
                                </h3>
                                <span class="size-8 mx-4">
                                    +
                                </span>
                                <div class="technology-logo accent pa-4 circular-border-radius">
                                    <img
                                        src="https://seeklogo.com/images/H/hibernate-logo-8C95C75A24-seeklogo.com.png"
                                        alt="Logo of Hibernate">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="http://hibernate.org/">
                                        Hibernate
                                    </a>
                                </h3>
                            </div>
                            <div class="technology-description">
                                <p class="mx-6 dark-gray--text size-6">
                                    <span class="font-weight-bold">Java</span> is also a known technology for, besides many other features, web server programming. Using
                                    <span class="primary white--text px-3 py-2 bold border-radius-3">Spring</span>
                                    I make it possible for you to have your solution. Hibernate takes place to connect your web server to
                                    <span class="primary white--text px-3 py-2 bold border-radius-3">MySQL</span>
                                    databases, and, it's worth highlighting, all the tools used in this stack are
                                    <span class="primary white--text px-3 py-2 bold border-radius-3">open source</span>.
                                </p>
                            </div>
                        </div>
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo primary pa-3 circular-border-radius">
                                    <img
                                        src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png"
                                        alt="Logo of Express.js">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://expressjs.com/">
                                        Express.js
                                    </a>
                                </h3>
                            </div>
                            <div class="technology-description">
                                <p class="mx-6 dark-gray--text size-6">
                                    This solution won't bring as much as performance as the other, but it has the facilities of using
                                    <span class="primary accent--text px-3 py-2 bold border-radius-3">JavaScript</span>
                                    to build your web server, with all the giant community and
                                    <span class="primary accent--text px-3 py-2 bold border-radius-3">continuously developed</span>
                                    features.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="development-area my-6">
                <div class="development-header d-flex flex-row align-center ma-6">
                    <div class="development-symbol circular-border-radius pa-6 primary">
                        <fa-icon :icon="['fas', 'mobile-alt']" class="accent--text size-9" />
                    </div>
                    <h3 class="ml-5 size-8 accent--text bold font-weight-light d-flex flex-row align-center">
                        Mobile Apps <span class="visible-lg-and-up ml-4 size-6 light-gray--text">// there's nothing like an app to spread your idea!</span>
                    </h3>
                </div>
                <div class="development-purpose mt-8 ma-6 px-7 d-flex flex-column justify-center align-center">
                    <p class="dark-gray--text size-6 ma-3 line-height-8">
                        The biggest companies around the world got a direct connection, became more visible and made their
                        <span class="primary white--text px-4 py-3 border-radius-3">customers engaged</span>
                        in their business through mobile apps! If this work is well done, your audience will trust your services
                        and it's likely they'll be around for longer.
                    </p>
                </div>
                <div class="development-technologies primary pa-8 mt-8">
                    <div class="oblique-divider" />
                    <div class="spacer mt-5" />
                    <div class="d-flex flex-row align-center">
                        <fa-icon :icon="['fas', 'code']" class="accent--text size-7" />
                        <h3 class="accent--text bold font-weight-light size-7 ml-4">
                            Available technologies:
                        </h3>
                    </div>
                    <div class="technologies-container">
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo primary circular-border-radius pa-3">
                                    <img
                                        src="https://facebook.github.io/react-native/img/header_logo.png"
                                        alt="Logo of React Native">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://facebook.github.io/react-native/">
                                        React Native
                                    </a>
                                </h3>
                            </div>
                            <div class="technology-description">
                                <p class="mx-6 dark-gray--text size-6">
                                    Building native mobile apps using JavaScript and the React.js component-model makes the mobile app
                                    <span class="primary accent--text px-3 py-2 bold border-radius-3">reliable</span>
                                    and
                                    <span class="primary accent--text px-3 py-2 bold border-radius-3">fast to develop</span>.
                                    This tool, similarly to <span class="font-weight-bold">React.js</span>, is supported by
                                    <span class="font-weight-bold">Facebook</span> and brings your solution to a wide and friendly community.
                                </p>
                            </div>
                        </div>
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo accent pa-3 circular-border-radius">
                                    <img
                                        src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png"
                                        alt="Logo of Flutter">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://flutter.io/">
                                        Flutter
                                    </a>
                                </h3>
                            </div>
                            <div class="technology-description">
                                <p class="mx-6 dark-gray--text size-6">
                                    When you need great performance and a fast development process, this tool takes place.
                                    Made by                               
                                    <span class="primary white--text px-3 py-2 bold border-radius-3">Google</span>,
                                    <span class="font-weight-bold">Flutter</span> brings a fresh community, organized Docs to work using
                                    <span class="primary white--text px-3 py-2 bold border-radius-3">Dart</span>, a
                                    <span class="primary white--text px-3 py-2 bold border-radius-3">compiled</span>
                                    language developed and maintained by the Mountain View's enterprise.
                                </p>
                            </div>
                        </div>
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo white pa-3 circular-border-radius">
                                    <img
                                        src="https://seeklogo.com/images/X/xamarin-logo-348B1EB629-seeklogo.com.png"
                                        alt="Logo of Xamarin.Forms">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://docs.microsoft.com/en-us/xamarin/xamarin-forms/">
                                        Xamarin.Forms
                                    </a>
                                </h3>
                            </div>
                            <div class="technology-description">
                                <p class="mx-6 dark-gray--text size-6">
                                    Exposing a complete
                                    <span class="primary accent--text px-3 py-2 bold border-radius-3">cross-platform</span>
                                    interface to manage native apps using C#, this tool is supported by
                                    <span class="primary accent--text px-3 py-2 bold border-radius-3">Microsoft</span>.
                                    The documentation is wide and this is useful if your app doesn't need many UI customization, because
                                    the development-cycle here will be slower, but as efficient and fast as the other tools.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../styles/Variables.scss';

.development-areas {
    .development-area {
        border-radius: nth($sizes, 3);
        border: nth($sizes, 3) $primaryColor solid;
        overflow: hidden;
        position: relative;
        .development-header {
            .development-symbol {
                width: nth($sizes, 9) * 2;
                height: nth($sizes, 9) * 2;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .development-symbol::before {
                content: ' ';
                position: absolute;
                top: nth($sizes, 9) * -1;
                left: nth($sizes, 8) * 1.25;
                height: nth($sizes, 9) * 2;
                width: nth($sizes, 9) * 2;
                background: $primaryColor;
                transform: rotate(-10deg) translateX(nth($sizes, 7) * -1);
                z-index: -1;
            }
            .development-symbol::after {
                content: ' ';
                position: absolute;
                top: nth($sizes, 6) * -2;
                left: nth($sizes, 9) * 1.3;
                height: nth($sizes, 9) * 3;
                width: 100%;
                background: $primaryColor;
                transform: rotate(2deg) translateX(nth($sizes, 7) * -.75);
                z-index: -1;
            }
        }
        .development-technologies {
            position: relative;
            .oblique-divider {
                height: nth($sizes, 9) * 1.25;
                transform: rotate(1deg) translateY(nth($sizes, 5) * -1);
            }
            .technologies-container {
                .technology {
                    margin: nth($sizes, 6) 0px;
                    background-color: white;
                    border: nth($sizes, 3) $primaryColor dashed;
                    .technology-header {
                        color: $primaryColor;
                        & > * {
                            margin-top: nth($sizes, 4);
                        }
                        h3 {
                            a {
                                border-bottom: nth($sizes, 3) $primaryColor dashed;
                            }
                        }
                        .technology-logo {
                            flex-shrink: 0;
                            width: nth($sizes, 9);
                            height: nth($sizes, 9);
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                            img {
                                width: 100%;
                            }
                        }
                    }
                    .technology-description {
                        margin-top: nth($sizes, 6);
                        p {
                            line-height: nth($sizes, 8);
                        }
                    }
                }
                .technology:nth-child(2n + 1) {
                    background: $accentColor;
                }
            }
        }
    }
}
</style>
