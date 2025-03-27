'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-prime documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-871f5f3933300bf387b3c339811f294e1d1f4de7716d8126b6b30180852044d6dfa85dd2647040aab28f0866ee64835d450446d364a8a3a9597e89df51805a8e"' : 'data-bs-target="#xs-controllers-links-module-AppModule-871f5f3933300bf387b3c339811f294e1d1f4de7716d8126b6b30180852044d6dfa85dd2647040aab28f0866ee64835d450446d364a8a3a9597e89df51805a8e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-871f5f3933300bf387b3c339811f294e1d1f4de7716d8126b6b30180852044d6dfa85dd2647040aab28f0866ee64835d450446d364a8a3a9597e89df51805a8e"' :
                                            'id="xs-controllers-links-module-AppModule-871f5f3933300bf387b3c339811f294e1d1f4de7716d8126b6b30180852044d6dfa85dd2647040aab28f0866ee64835d450446d364a8a3a9597e89df51805a8e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-871f5f3933300bf387b3c339811f294e1d1f4de7716d8126b6b30180852044d6dfa85dd2647040aab28f0866ee64835d450446d364a8a3a9597e89df51805a8e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-871f5f3933300bf387b3c339811f294e1d1f4de7716d8126b6b30180852044d6dfa85dd2647040aab28f0866ee64835d450446d364a8a3a9597e89df51805a8e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-871f5f3933300bf387b3c339811f294e1d1f4de7716d8126b6b30180852044d6dfa85dd2647040aab28f0866ee64835d450446d364a8a3a9597e89df51805a8e"' :
                                        'id="xs-injectables-links-module-AppModule-871f5f3933300bf387b3c339811f294e1d1f4de7716d8126b6b30180852044d6dfa85dd2647040aab28f0866ee64835d450446d364a8a3a9597e89df51805a8e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-389684914884972d2ec658391a673469d3bbccdad2e3d639ad66eeda6bb58f12e49142ec0d7996225e38d6b63a9435afcd8c84a3fb147cca2f3929909151e5b2"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-389684914884972d2ec658391a673469d3bbccdad2e3d639ad66eeda6bb58f12e49142ec0d7996225e38d6b63a9435afcd8c84a3fb147cca2f3929909151e5b2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-389684914884972d2ec658391a673469d3bbccdad2e3d639ad66eeda6bb58f12e49142ec0d7996225e38d6b63a9435afcd8c84a3fb147cca2f3929909151e5b2"' :
                                            'id="xs-controllers-links-module-AuthModule-389684914884972d2ec658391a673469d3bbccdad2e3d639ad66eeda6bb58f12e49142ec0d7996225e38d6b63a9435afcd8c84a3fb147cca2f3929909151e5b2"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-389684914884972d2ec658391a673469d3bbccdad2e3d639ad66eeda6bb58f12e49142ec0d7996225e38d6b63a9435afcd8c84a3fb147cca2f3929909151e5b2"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-389684914884972d2ec658391a673469d3bbccdad2e3d639ad66eeda6bb58f12e49142ec0d7996225e38d6b63a9435afcd8c84a3fb147cca2f3929909151e5b2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-389684914884972d2ec658391a673469d3bbccdad2e3d639ad66eeda6bb58f12e49142ec0d7996225e38d6b63a9435afcd8c84a3fb147cca2f3929909151e5b2"' :
                                        'id="xs-injectables-links-module-AuthModule-389684914884972d2ec658391a673469d3bbccdad2e3d639ad66eeda6bb58f12e49142ec0d7996225e38d6b63a9435afcd8c84a3fb147cca2f3929909151e5b2"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-1175e9b3a1d8f6f266d05717d2dec55bba3f1afe7d25a191e362cf0b207fe16872ada15b93a440f6499557c02dd1e1f393ee9729b2225b774e2e1ba2d259897a"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-1175e9b3a1d8f6f266d05717d2dec55bba3f1afe7d25a191e362cf0b207fe16872ada15b93a440f6499557c02dd1e1f393ee9729b2225b774e2e1ba2d259897a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-1175e9b3a1d8f6f266d05717d2dec55bba3f1afe7d25a191e362cf0b207fe16872ada15b93a440f6499557c02dd1e1f393ee9729b2225b774e2e1ba2d259897a"' :
                                            'id="xs-controllers-links-module-PostsModule-1175e9b3a1d8f6f266d05717d2dec55bba3f1afe7d25a191e362cf0b207fe16872ada15b93a440f6499557c02dd1e1f393ee9729b2225b774e2e1ba2d259897a"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-1175e9b3a1d8f6f266d05717d2dec55bba3f1afe7d25a191e362cf0b207fe16872ada15b93a440f6499557c02dd1e1f393ee9729b2225b774e2e1ba2d259897a"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-1175e9b3a1d8f6f266d05717d2dec55bba3f1afe7d25a191e362cf0b207fe16872ada15b93a440f6499557c02dd1e1f393ee9729b2225b774e2e1ba2d259897a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-1175e9b3a1d8f6f266d05717d2dec55bba3f1afe7d25a191e362cf0b207fe16872ada15b93a440f6499557c02dd1e1f393ee9729b2225b774e2e1ba2d259897a"' :
                                        'id="xs-injectables-links-module-PostsModule-1175e9b3a1d8f6f266d05717d2dec55bba3f1afe7d25a191e362cf0b207fe16872ada15b93a440f6499557c02dd1e1f393ee9729b2225b774e2e1ba2d259897a"' }>
                                        <li class="link">
                                            <a href="injectables/PostsServices.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsServices</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-667e0def51d6af8ed3e84866d06a93ac49b57dcbe1fe7ca418ad44040578c88fe8d2f4340a2a04f299072a5d94f3144b576fb5ab0cab9ac8dbcf972327169887"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-667e0def51d6af8ed3e84866d06a93ac49b57dcbe1fe7ca418ad44040578c88fe8d2f4340a2a04f299072a5d94f3144b576fb5ab0cab9ac8dbcf972327169887"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-667e0def51d6af8ed3e84866d06a93ac49b57dcbe1fe7ca418ad44040578c88fe8d2f4340a2a04f299072a5d94f3144b576fb5ab0cab9ac8dbcf972327169887"' :
                                            'id="xs-controllers-links-module-UsersModule-667e0def51d6af8ed3e84866d06a93ac49b57dcbe1fe7ca418ad44040578c88fe8d2f4340a2a04f299072a5d94f3144b576fb5ab0cab9ac8dbcf972327169887"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-667e0def51d6af8ed3e84866d06a93ac49b57dcbe1fe7ca418ad44040578c88fe8d2f4340a2a04f299072a5d94f3144b576fb5ab0cab9ac8dbcf972327169887"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-667e0def51d6af8ed3e84866d06a93ac49b57dcbe1fe7ca418ad44040578c88fe8d2f4340a2a04f299072a5d94f3144b576fb5ab0cab9ac8dbcf972327169887"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-667e0def51d6af8ed3e84866d06a93ac49b57dcbe1fe7ca418ad44040578c88fe8d2f4340a2a04f299072a5d94f3144b576fb5ab0cab9ac8dbcf972327169887"' :
                                        'id="xs-injectables-links-module-UsersModule-667e0def51d6af8ed3e84866d06a93ac49b57dcbe1fe7ca418ad44040578c88fe8d2f4340a2a04f299072a5d94f3144b576fb5ab0cab9ac8dbcf972327169887"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsServices.html" data-type="entity-link" >PostsServices</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});