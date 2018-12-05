import { AppString, Operator } from '../systems/Constants';

export const FormatString = {

    Currency: function (n, split = false, c, d, t) {

        c = isNaN(c = Math.abs(c)) ? 2 : c;
        d = d == undefined ? "," : d;
        t = t == undefined ? "." : t;
        s = n < 0 ? "-" : "";
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
        j = (j = i.length) > 3 ? i.length % 3 : 0;

        if (split == true) {
            j = j == 0 ? 3 : j;

            let Main = (j ? i.substr(0, j) : i.substr(0, 3));
            let Sub = t + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);

            return { Main, Sub };
        }
        else {
            return AppString.YourCurrency + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);
        }

    }

}

export const FormatTimes = {

    Minutes: function (t) {
        if (t >= 60) {
            m = Math.floor(t / 60)
            s = t % 60
        } else {
            m = 0
            s = t
        }

        if (m.length < 2) m = String("0" + m)
        if (s.length < 2) s = String("0" + s)

        return m + " menit " + s + " detik "
    }
}