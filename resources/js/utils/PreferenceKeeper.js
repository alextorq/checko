class PreferenceKeeper {
        save(name, preference) {
            if (typeof preference !== 'string') {
                preference = JSON.stringify(preference);
            }
            localStorage.setItem(name, preference);
        }
        get(name) {
            let preference = localStorage.getItem(name);
            let numberPattern = new RegExp(/^-?\d+\.?\d*$/);
            if (numberPattern.test(preference)) {
                return +preference;
            }
            else {
                try {
                    preference = JSON.parse(preference);
                }catch (e) {

                }
            }

            return preference;
        }
}

export default new PreferenceKeeper;