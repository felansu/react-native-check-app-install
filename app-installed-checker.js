import { Linking, Platform } from 'react-native';
import CheckPackageInstallation from './android';

class AppInstalledChecker {

    static checkPackageName(packagename) {
        return new Promise((resolve, reject) => {
            CheckPackageInstallation.isPackageInstalled(packagename, (isInstalled) => {
                resolve(isInstalled);
            });
        });
    }

    static checkURLScheme(proto, query) {
        return new Promise((resolve, reject) => {
            Linking
                .canOpenURL(proto + '://' + query || '')
                .then((isInstalled) => {
                    console.log('isInstalled', isInstalled);
                    resolve(isInstalled);
                })
                .catch((err) => {
                    console.log('erroer', err);
                    reject(err);
                });
        });
    }

    static isAppInstalled(key) {
        return Platform.select({
            ios: () => { return this.isAppInstalledIOS(key); },
            android: () => { return this.isAppInstalledAndroid(key); }
        })();
    }

    static isAppInstalledAndroid(key) {
        return this.checkPackageName(key);
    }

    static isAppInstalledIOS(key) {
        return this.checkURLScheme(key);
    }
}

export default AppInstalledChecker;
