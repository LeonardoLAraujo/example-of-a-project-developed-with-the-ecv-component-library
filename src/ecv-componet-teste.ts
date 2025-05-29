import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement } from 'lit/decorators.js';
import "ecv-component";
import { AxisSizeRow, BoxDecorationStyle, ButtonStyle, Cursor, FlexColumnJustifyContent, FlexRowJustifyContent, FontWeight, ImageDecoration, Position, TextStyle } from 'ecv-component';

const MENU = [
    {guia: "HOME", href: "#", atual: true},
    {guia: "what is ecv component", href: "#", atual: false},
    {guia: "About ecv component", href: "#", atual: false},
    {guia: "Contact", href: "#", atual: false},
]

@customElement('ecv-componet-teste')
export default class EcvComponentTeste extends LitElement{

    static override get styles(): CSSResult{
        return css``;
    }

    private generateMenu(): Array<TemplateResult>{
        return MENU.map((block) => html`
            <ecv-box-decoration .decoration=${{
                borderAll: block.atual ? "1px solid #fff" : "none", 
                paddingAll: "0.5rem"
            }}>
                <ecv-flex-center>
                    <ecv-hyperlink link=${block.href} ?hasUnderline=${true} visitedState="#fff">
                        ${block.guia}
                    </ecv-hyperlink>
                </ecv-flex-center>
            </ecv-box-decoration>
        `);
    }


    private topBar(): TemplateResult{
        const DECORATION: BoxDecorationStyle = {
            width: "100%",
            height: "auto",
            backgroundColor: "#38A5DB",
            paddingAll: "1rem 0rem 1rem 0rem"
        }

        const IMAGE_STYLE: ImageDecoration = {
            width: "100px"
        }

        return html`
             <ecv-positioned-box position=${Position.FIXED} width="100%">
                <ecv-box-decoration .decoration=${DECORATION}>
                    <ecv-flex-row .flexJustify=${FlexRowJustifyContent.EVENLY}>
                        <ecv-image source="../icon.png" .imageDecoration=${IMAGE_STYLE}></ecv-image>
                        <ecv-flex-row axisSize=${AxisSizeRow.MIN}> 
                            ${this.generateMenu()}
                        </ecv-flex-row>
                    </ecv-flex-row>
                </ecv-box-decoration>
            </ecv-positioned-box>
        `;
    }

    private introduction(): TemplateResult{
        const INTRODUCTION_STYLE: BoxDecorationStyle = {
            backgroundImage: "https://templateswebsite.dawidolko.pl/johndoe-portfolio-resume-bootstrap-template/img/bg/01.jpg",
            paddingTop: "calc(70px - 1px)",
            width: "100vw",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh"
        }

        const INTRODUCTION_CONTAINER_STYLE: BoxDecorationStyle = {
            backgroundGradientColor: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,
                                                                rgba(0,0,0,0.73) 17%,rgba(0,0,0,0.66) 35%,rgba(0,0,0,0.55) 62%,rgba(0,0,0,0.4) 100%)`,
            width: "100%", 
            height: "100vh",
        }

        const TITLE_STYLE: TextStyle = {
            color: "#fff",
            size: "40px",
            textAlign: "center"
        }

        const BUTTON_STYLE: ButtonStyle = {
            backgroundColor: "transparent",
            cursor: Cursor.POINTER
        }

        const BUTTON_TEXT_STYLE: TextStyle = {
            color: "#38A5DB",
            weight: FontWeight.Bold,
            size: "18px"
        }

        return html`
            <ecv-box-decoration .decoration=${INTRODUCTION_STYLE}>
                <ecv-box-decoration .decoration=${INTRODUCTION_CONTAINER_STYLE}>
                    <ecv-flex-column flexJustify=${FlexColumnJustifyContent.CENTER}>
                        <ecv-text .textStyle=${TITLE_STYLE}>ECV COMPONENT</ecv-text>
                        <ecv-text .textStyle=${TITLE_STYLE}>Use Libary ECV COMPONENT</ecv-text>
                        <ecv-text .textStyle=${{color: "#fff", textAlign: "center"}}>ECV COMPONENT</ecv-text>
                        <ecv-box-decoration .decoration=${{
                            width: "200px",
                            borderAll: "1px solid #fff",
                            marginTop: "3rem"
                        }}>
                            <ecv-text-button .buttonStyle=${BUTTON_STYLE} .textStyle=${BUTTON_TEXT_STYLE}>
                                GO TO NPM 
                            </ecv-text-button>

                        </ecv-box-decoration>
                    </ecv-flex-column>
                </ecv-box-decoration>
            </ecv-box-decoration>
        `;
    }

    protected override render(): TemplateResult{

        return html`
            ${this.topBar()}
            ${this.introduction()}
        `;
    }

}

declare global{

   interface HTMLElementTagNameMap{
    'ecv-componet-teste': EcvComponentTeste
   }
}