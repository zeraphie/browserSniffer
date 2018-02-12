export default class BrowserSniffer {
    /**
     * Regex to return the browser from the userAgent
     *
     * @returns {RegExp}
     */
    static get browserRegex(){
        return new RegExp(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/, 'i');
    }

    /**
     * Regex for trident browsers
     *
     * @returns {RegExp}
     */
    static get tridentRegex(){
        return new RegExp(/trident/, 'i');
    }

    /**
     * Regex for IE browsers
     *
     * @returns {RegExp}
     */
    static get ieRegex(){
        return new RegExp(/\brv[ :]+(\d+)/, 'g');
    }

    /**
     * Regex for Opera browsers
     *
     * @returns {RegExp}
     */
    static get chromeRegex(){
        return new RegExp(/\b(OPR|Edge)\/(\d+)/);
    }

    /**
     * Regex for the version
     *
     * @returns {RegExp}
     */
    static get versionRegex(){
        return new RegExp(/version\/(\d+)/, 'i');
    }

    /**
     * The userAgent
     *
     * @returns {string}
     */
    static get ua(){
        return navigator.userAgent;
    }

    /**
     * Get the browser with its major version number
     *
     * @returns {string}
     */
    get browser(){
        let temp;

        // Get the browser from the userAgent
        let matched = this.constructor.ua.match(this.constructor.browserRegex) || [];

        // Test for internet explorer
        if(this.constructor.tridentRegex.test(matched[1])){
            temp = this.constructor.ieRegex.exec(this.constructor.ua) || [];

            return 'IE ' + (temp[1] || '');
        }

        // Test for chrome or opera
        if(matched[1] === 'Chrome'){
            temp = this.constructor.ua.match(this.constructor.chromeRegex);

            if(temp !== null){
                return temp.slice(1).join(' ').replace('OPR', 'Opera');
            }
        }

        // Other browsers
        matched = matched[2] ? [matched[1], matched[2]] : [navigator.appName, navigator.appVersion, '-?'];

        // Get the major version of the browser
        let version = this.constructor.ua.match(this.constructor.versionRegex);

        if(version !== null){
            matched.splice(1, 1, temp[1]);
        }

        // Return the browser with it's major version
        return matched.join(' ');
    }

    /**
     * Get the browser without its version number
     *
     * @returns {string}
     */
    get name(){
        return this.browser.substr(0, this.browser.indexOf(' '));
    }

    /**
     * Get the browsers major version number
     *
     * @returns {string}
     */
    get version(){
        return this.browser.substr(this.browser.indexOf(' ') + 1);
    }

    /**
     * Regex match against the browser with its version number
     *
     * @param browser
     * @returns {boolean}
     */
    matchBrowser(browser){
        return new RegExp(browser, 'i').test(this.browser);
    }

    /**
     * Regex match against the browser's name only
     *
     * @param name
     * @returns {boolean}
     */
    matchName(name){
        return new RegExp(name, 'i').test(this.name);
    }

    /**
     * Regex match against the browser's major version number
     *
     * @param version
     * @returns {boolean}
     */
    matchVersion(version){
        return new RegExp(version, 'i').test(this.version);
    }
}
