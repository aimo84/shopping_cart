<template>
    <section class="saleId-container">
        <div class="saleId-header">
            <div class="line1 special" v-if="$i18n.locale === 'en' && windowWidth < 450">
                <span>{{ label.header_line_1_1[$i18n.locale] }}</span>
                <span>{{ label.header_line_1_2[$i18n.locale] }}</span>
            </div>
            <span class="line1" v-else>{{ label.header_line_1[$i18n.locale] }}</span>
            <span :class="[ $i18n.locale === 'en' && windowWidth < 450 ? '': 'line2' ]">{{ label.header_line_2[$i18n.locale] }}</span>
        </div>
        <div class="saleId-subheader">
            <span class="line1">{{
                label.subheader_line_1[$i18n.locale]
            }}</span>
            <input-element
                id="saleIdinput"
                :type="`number`"
                maxlength="8"
                @oninput="numberOnly"
                v-model="saleId"
                :class="{ 'input-error': saleIdError }"
                :customCSS="$i18n.locale === 'en' ? inputCustomEnCSS : inputCustomThCSS"
                :placeholder="label.placeholder[$i18n.locale]"
            />
            <div v-if="saleIdError" class="text-error">
                {{ label.error_message[$i18n.locale] }}
            </div>
        </div>
        <div class="saleId-button-group">
            <button-element
                class="continue_button"
                @click="submitSaleId('notSkip')"
                >{{ label.continue_buttom[$i18n.locale] }}</button-element
            >
            <button class="skip_button" @click="submitSaleId('skip')">
                {{ label.skip_buttom[$i18n.locale] }}
            </button>
        </div>
    </section>
</template>

<script>
import Input from "@components/input";
import Button from "@components/button";

export default {
    components: {
        "input-element": Input,
        "button-element": Button
    },
    data: () => ({
        label: {
            header_line_1: {
                en: "Please fill in information of Salesperson",
                th: "กรอกรายละเอียด"
            },
            header_line_1_1: {
                en: "Please fill in information of",
                th: ""
            },
            header_line_1_2: {
                en: "Salesperson",
                th: ""
            },
            header_line_2: {
                en: "who takes care of you.",
                th: "พนักงานขายที่ดูแลคุณ"
            },
            subheader_line_1: {
                en: "Sales Code information",
                th: "กรอกรหัสพนักงานขาย"
            },
            placeholder: {
                en: "Enter the 8-digit code",
                th: "กรอกรหัสพนักงานขาย 8 หลัก"
            },
            error_message: {
                en: "Enter the 8-digit code",
                th: "กรุณากรอกรหัสพนักงานขาย 8 หลัก"
            },
            continue_buttom: {
                en: "Next",
                th: "ดำเนินการต่อ"
            },
            skip_buttom: {
                en: "Skip",
                th: "ข้าม"
            }
        },
        inputCustomThCSS: {
            fontFamily: "TrueMedium",
            borderColor: "#E7E7E7",
            lineHeight: "28.79px",
            fontSize: "24px",
            padding: "0 70px"
        },
        inputCustomEnCSS: {
            fontFamily: "TrueMedium",
            borderColor: "#E7E7E7",
            lineHeight: "28.79px",
            fontSize: "24px",
            padding: "0 90px"
        },
        saleId: "",
        allParamsString: "",
        saleIdError: false,
        windowWidth: window.innerWidth
    }),
    mounted() {
        this.getAllParams();
        this.$nextTick(() => {
            window.addEventListener("resize", this.widthResize);
        });
    },
    watch: {
        saleId() {
            this.validateSaleId();
        }
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.widthResize);
    },
    methods: {
        getAllParams() {
            Object.entries(this.$route.query).forEach(([key, value]) => {
                this.allParamsString += `${key}=${value}&`;
            });
            this.allParamsString = this.allParamsString.slice(0, -1);
        },
        submitSaleId(text) {
            let productId = this.$route.path.split("/")[3];
            if (text === "skip") {
                localStorage.removeItem("saleId");
                this.$router.push(
                    `/online-store/instantsim/${productId}?${this.allParamsString}`
                );
            } else {
                if (this.saleIdError === false) {
                    localStorage.removeItem("saleId");
                    localStorage.setItem("saleId", this.saleId);
                    this.$router.push(
                        `/online-store/instantsim/${productId}?${this.allParamsString}`
                    );
                }
            }
        },
        numberOnly() {
            let ele = document.getElementById("saleIdinput");
            ele.value = ele.value.replace(/[^0-9]/gi, "");
        },
        validateSaleId() {
            let saleId = this.saleId;
            if (saleId.length !== 8) {
                this.saleIdError = true;
            } else {
                this.saleIdError = false;
            }
        },
        widthResize() {
            this.windowWidth = window.innerWidth;
        }
    }
};
</script>

<style scoped lang="scss">
.saleId-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.saleId-header,
.saleId-subheader,
.saleId-button-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    line-height: 28.79px;
    color: #2e2e2e;
}

.saleId-header {
    font-family: "TrueBold";
    font-size: 34px;
    font-style: normal;
    line-height: 36px;
    margin-top: 100px;
    min-width: 384px;

    .line1.special {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .line2 {
        margin-top: 10px;
    }
}

.saleId-subheader {
    margin: 40px;
    font-size: 24px;

    .line1 {
        font-family: "TrueMedium";
        line-height: 33.59px;
        font-style: normal;
        font-size: 28px;
        font-weight: 500;
    }

    .input {
        margin: 22px 0 0 0px;
        width: 338px;
        align-items: center;
        text-align: center;
    }

    .text-error {
        font-size: 20px;
        margin-top: 5px;
        color: red !important;
    }

    .input-error {
        border: 1px solid red !important;
        border-radius: 8px;
    }
}

.saleId-button-group {
    margin: 100px 0;

    .continue_button {
        cursor: pointer;
        font-family: "TrueMedium";
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    .skip_button {
        border: none;
        background-color: white;
        color: #0094ff;
        cursor: pointer;
        font-size: 25px;
        font-family: "TrueMedium";
        line-height: 33.59px;
        text-decoration: underline;
    }
}
</style>
