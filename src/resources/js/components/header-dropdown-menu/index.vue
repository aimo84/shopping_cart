<template>
    <dialog-element
        ref="dialog"
        name="dropdown"
        show-close-button
    >
        <template slot="dropdown">
            <div class="header-dropdown-menu-container">
                <div class="header-dropdown-menu-title">{{ Locale.header[$i18n.locale] }}</div>
                <div 
                    v-for="(subMenu, subMenuKey) in Locale.dropdownInformation"
                    :key="subMenuKey"
                    class="header-dropdown-menu-submenu"
                >
                    <a :href="subMenu.link">{{ subMenu.text[$i18n.locale] }}</a>
                </div>
            </div>
        </template>
    </dialog-element>
</template>

<script>
    import Dialog from '@components/dialog'
    import Locale from './locale.json'

    export default {
        components: {
            'dialog-element' : Dialog,
        },
        data: () => ({
            Locale,
            component: null,
        }),
        mounted () {
            this.$emit('loaded')
        },
        methods: {
            open () {
                this.component = 'dropdown'
                this.$refs.dialog.open()
            },
            close () {
                this.$refs.dialog.close()  
            },
        }
    }
</script>

<style lang='scss' scoped>
    .header-dropdown-menu-container {
        bottom: 0px;
        position: fixed;
        margin: 0 auto;
        width: 100%;
        padding-bottom: 25px;
        
    }

    .header-dropdown-menu-title, .header-dropdown-menu-submenu {
        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: 'TrueBold';
        font-weight: 700;
        font-style: normal;
    }

    .header-dropdown-menu-title {
        padding-bottom: 15px;
        font-size: 24px;
        line-height: 28.79px;
    }

    .header-dropdown-menu-submenu {
        cursor: pointer;
        font-size: 22px;
        line-height: 26.39px;
        margin-top: 8px;
    }

    .header-dropdown-menu-submenu div {
        color: #40454E;
    }
    
    .header-dropdown-menu-submenu a {
        text-decoration: none;
        color: #40454E;
    }

    @media screen and (min-width: 1000px) {
        .header-dropdown-menu-container {
            display: none;
        }
    }

</style>