/**
 * Created by Konstantin on 21.05.2017.
 */
export default function delay(ms = 1000)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);
    });
}
