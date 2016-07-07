/**
 * @file A Custom Style Class
 * @author Leo Wang(leowang721@gmail.com)
 */

class CustomStyle {
    constructor(styles) {
        this.styles = styles;
        this.reset();
    }

    reset() {
        this.value = {};
        for (var k in this.styles.normal) {
            this.value[k] = [this.styles.normal[k]];
        }
        return this;
    }

    adjust(key) {
        if (!key || !this.styles[key]) {
            return this;
        }
        for (var k in this.styles[key]) {
            this.value[k].push(this.styles[key][k]);
        }
        return this;
    }
}

module.exports = CustomStyle;
