/*
 * (C) Copyright 2019 Lukas Morawietz (https://github.com/F43nd1r)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class AcrariumCard extends PolymerElement {
    static get template() {
        // language=HTML
        return html`
            <style>
                :host {
                    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
                    border-radius: 2px;
                    margin: 1rem;
                    display: inline-flex;
                    flex-direction: column;
                }

                .acrarium-card-header {
                    padding: 1rem;
                    box-sizing: border-box;
                    background-color: var(--acrarium-card-header-color, var(--lumo-contrast-5pct));
                    color: var(--acrarium-card-header-text-color);
                    display: inline-block;
                    width: 100%;
                }

                .acrarium-card-content {
                    padding: 1rem;
                    box-sizing: border-box;
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                }
                
                .acrarium-card-content-wrapper {
                    width: 100%;
                    flex: 1;
                    min-height: 0;
                }

                .collapse {
                    display: none;
                }

                .divider > ::slotted(:not(:first-of-type)) {
                    border-top: 1px solid var(--lumo-contrast-20pct);
                    margin-top: 0.5em;
                }
            </style>
            <slot name="header" class="acrarium-card-header" on-click="handleClick"></slot>
            <div class$="{{getContentClass(collapse, divider)}}">
                <slot class="acrarium-card-content"></slot>
            </div>
        `
    }

    getContentClass(collapse, divider) {
        let classes = "acrarium-card-content-wrapper";
        if (collapse) classes += " collapse";
        if (divider) classes += " divider";
        return classes;
    }

    static get properties() {
        return {
            canCollapse: Boolean,
            collapse: Boolean,
            divider: Boolean
        }
    }

    handleClick() {
        if (this.canCollapse) {
            this.collapse = !this.collapse;
        }
    }
}

customElements.define("acrarium-card", AcrariumCard);