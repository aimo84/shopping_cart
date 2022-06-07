<template>
    <div class="option-page-container">
        <div class="option-page-header-group">
            <span class="header-line-1">{{
                Locale.option_Page.option_page_header_line_1[$i18n.locale]
            }}</span>
            <span class="header-line-2">{{
                Locale.option_Page.option_page_header_line_2[$i18n.locale]
            }}</span>
        </div>
        <div class="option-page-header-button-group">
            <button-element
                class="device-bundling-button"
                @click="deviceBundling"
            >
                <div class="dot">
                    <img
                        class="device-bundling-img"
                        :src="`/images/icons/device-bundling-option-page.png`"
                    />
                </div>
                <div class="device-bundling-text-group">
                    <span>{{
                        Locale.option_Page.option_page_button_1_1[$i18n.locale]
                    }}</span>
                    <span>{{
                        Locale.option_Page.option_page_button_1_2[$i18n.locale]
                    }}</span>
                    <span>{{
                        Locale.option_Page.option_page_button_1_3[$i18n.locale]
                    }}</span>
                </div>
            </button-element>
            <button-element class="sim-only-button" @click="simOnly">
                <div class="dot">
                    <img
                        class="sim-only-img"
                        :src="`/images/icons/sim-only-option-page.png`"
                    />
                </div>
                <div class="sim-only-text-group">
                    <span>{{
                        Locale.option_Page.option_page_button_2_1[$i18n.locale]
                    }}</span>
                    <span>{{
                        Locale.option_Page.option_page_button_2_2[$i18n.locale]
                    }}</span>
                </div>
            </button-element>
        </div>
    </div>
</template>

<script>
import Button from "@components/button";
import Locale from "./locale.json";
export default {
    components: {
        "button-element": Button,
        "info-form": () => import("./info-form.vue")
    },
    props: {
        product: Object,
        postpaidResult: Object,
        selectedPricePlan: Object,
        packages: Object,
        noEkycCartForm: Object,
        berfuntongType: String
    },
    data: () => ({
        Locale
    }),
    methods: {
        deviceBundling() {
            let vhoraPricePlan = JSON.parse(localStorage.getItem("vhora-priceplan"));
            let lowTierForm = JSON.parse(localStorage.getItem("vhora-zodiac-form"));
            let heightTierForm = JSON.parse(localStorage.getItem("vhora-form"));
            if (this.berfuntongType === "low-tier") {
                lowTierForm.original_proposition_amdoc = lowTierForm.proposition_amdoc;
                lowTierForm.original_proposition_code = lowTierForm.proposition_code;
                lowTierForm.proposition_amdoc = lowTierForm.bundling.proposition_amdoc;
                lowTierForm.proposition_code = lowTierForm.bundling.proposition_code;
                window.localStorage.setItem("vhora-zodiac-form", JSON.stringify(lowTierForm));

                window.localStorage.removeItem("offline_bundle");
                window.localStorage.setItem("offline_bundle", true);

                vhoraPricePlan.proposition_nas_code = lowTierForm.bundling.proposition_code;
                window.localStorage.setItem("vhora-priceplan", JSON.stringify(vhoraPricePlan));
                this.$parent.goTo("address");
            } else if (this.berfuntongType === "high-tier") {
                heightTierForm.original_proposition_amdoc = heightTierForm.proposition_amdoc;
                heightTierForm.original_proposition_code = heightTierForm.proposition_code;
                heightTierForm.proposition_amdoc = heightTierForm.bundling.proposition_amdoc;
                heightTierForm.proposition_code = heightTierForm.bundling.proposition_code;
                window.localStorage.setItem("vhora-form", JSON.stringify(heightTierForm));

                window.localStorage.removeItem("offline_bundle");
                window.localStorage.setItem("offline_bundle", true);

                vhoraPricePlan.proposition_nas_code = heightTierForm.bundling.proposition_code;
                window.localStorage.setItem("vhora-priceplan", JSON.stringify(vhoraPricePlan));
                this.$router.push("/offline-store/berfuntong/pre-validation");
            }
        },
        simOnly() {
            let vhoraPricePlan = JSON.parse(localStorage.getItem("vhora-priceplan"));
            let lowTierForm = JSON.parse(localStorage.getItem("vhora-zodiac-form"));
            let heightTierForm = JSON.parse(localStorage.getItem("vhora-form"));
            if (this.berfuntongType === "low-tier") {
                if(lowTierForm["original_proposition_amdoc"] && lowTierForm["original_proposition_code"]){
                    lowTierForm.proposition_amdoc = lowTierForm.original_proposition_amdoc;
                    lowTierForm.proposition_code = lowTierForm.original_proposition_code;
                    vhoraPricePlan.proposition_nas_code = lowTierForm.original_proposition_code;
                }
                window.localStorage.setItem("vhora-zodiac-form", JSON.stringify(lowTierForm));
                this.$parent.goTo("address");
            } else if (this.berfuntongType === "high-tier") {
                if(heightTierForm["original_proposition_amdoc"] && heightTierForm["original_proposition_code"]) {
                    heightTierForm.proposition_amdoc = heightTierForm.original_proposition_amdoc;
                    heightTierForm.proposition_code = heightTierForm.original_proposition_code;
                    vhoraPricePlan.proposition_nas_code = heightTierForm.original_proposition_code
                }
                window.localStorage.setItem("vhora-form", JSON.stringify(heightTierForm));
                this.$router.push("/offline-store/berfuntong/pre-validation");
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.option-page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.option-page-header-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .header-line-1 {
        margin-top: 40px;
        font-weight: 500;
        font-style: normal;
        font-size: 50px;
        line-height: 59.99px;
    }

    .header-line-2 {
        margin-top: 3px;
        font-weight: 500px;
        font-style: normal;
        font-size: 32px;
        line-height: 38.39px;
    }
}

.option-page-header-button-group {
    margin-top: 27px;
    display: flex;
    flex-direction: row;

    .device-bundling-button,
    .sim-only-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(#ff0000, #bf0000);

        .dot {
            margin-top: 16px;
            height: 106px;
            width: 106px;
            background-color: #fff;
            border-radius: 50%;
            display: inline-block;

            .device-bundling-img,
            .sim-only-img {
                margin-top: 16px;
            }

            .device-bundling-img {
                margin-top: 15px;
                margin: 15px 10.64px 19px 9.64px;
                width: 85.71px;
                height: 72px;
            }

            .sim-only-img {
                margin-top: 18px;
                margin: 18px 18.36px 19px 18.64px;
                width: 69px;
                height: 69px;
            }
        }

        .device-bundling-text-group,
        .sim-only-text-group {
            display: flex;
            flex-direction: column;
        }

        .device-bundling-text-group {
            margin-top: 21px;
        }

        .sim-only-text-group {
            margin-top: 33px;
            justify-content: center;
            align-items: center;
        }
    }

    .sim-only-button {
        margin-left: 20px;
    }
}

@media screen and (max-width: 680px) {
    .option-page-header-group {
        .header-line-1 {
            font-size: 43px;
        }

        .header-line-2 {
            font-size: 25px;
        }
    }
    .option-page-header-button-group {
        display: flex;
        flex-direction: column;
        align-items: center;

        .sim-only-button {
            margin: 20px 0 0 0;
        }
    }
}
</style>
