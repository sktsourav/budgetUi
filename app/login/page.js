import Link from 'next/link';

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-1/4 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAEQCAMAAADbFyX8AAAAk1BMVEX///
                    8GRa0AN6kAP6vD0Om7xuJfgcUAQqwAQawAOakAOqpRd8EAM6gANaj6/P4AMqjr8PiktdzK1evt8vlyjsqwv+CJoNKput7k6/bW3/A4Y7kASK8+Z7qardhJbr31
                    +PwxXrfR2+4AKKZ/l85qh8eTqNYjVrRFa7ytveBbfMKAm9FPc78fUbJogsSUqda5w+EAI6RtEaLKAAAHgUlEQVR4nO1di1bqSBCEiThJSAgvQ3hJQA0iUff/
                    v27Bu+sVJppuTJhqpT5Aizn9rOnpNBpHWLpNCQhujol3UhHM/c0x8UasbJOiQE+7x8THkW1SJISPxpFnImzFMW3lSYat6MEx8b5vmxQJBXFlIsNW2lLjimv
                    GlcA2KRJMW5EbV4TYyjQ5Jr4UQbwgB0mJK1uhttJURg5aerY5kSA3B/2guCKlth0ZRy4kB4mtVxwzrgipbX9QDnoQYitmXFk5ZXD30HtUy8Yt/c9/EZk989
                    Pm+nNs9mhvb9ezSZpmeT51/UApf/djqvgRX/3nY9wZxOnoLAbdJBkvW6N4uFlnTrT7Bd/i73yHzelYdMc38XMWBP7p/q1erFB/Q2dx9bINT2YfXtmj/
                    oblw8RRp5DXvpFczo5kdOv4fKt3bm0T3yOJs5B98GHPNu03LG7SiHnuummIJ5bwmoc87v69bcrvmDcdFvXAdnz5i8Ez69jdmW3CH3Az5Rx70LLN9wOSCaPkd1PbdD+
                    iswkZh45j6XsM6dShLH2HmE49HNsme4gnMnVnaJvrEe6pip+e2i+8DtCZUINj+Gqb6xEG1J6vQC+0jBb15kmj1F3vuCdmpNC8tbKMwZRmL3DRpdHo0UKjzju2mRogSn8RWDLaoUXT/
                    hRGV3cA2qE7VbRGrWoxJKUjnTP/7OvSID5fqUpBzKOa91fDlSHtJjKuAQrUjhmv/7WEgmuAuYhJEe1KtRU1N458LcNWzPZvzuh7LSIwr4xEnHgzNG3lVgRzZy3VVnyjOEtkjC0UxJWZ
                    jKto85ZjLuIquumbOaiSu9naEZoXkVsRccWdmLYiol4pshWx9YqQ2taMKz0ZtuKYOUiIrZhxRUa9UhRXZNQrodgc9INq294/1eorBSAFAP9rfUWZwuNV/XgkVKH+w9d/w5S0zgFK1I0M/
                    0NAQiigA9skC7EsT9E6s02yEK/lZw543bLHQ7mdK3MoHgEECR3wtmWHzro0Kuom3g3XDovyI8e7hH5Dvzy0IF5w7RCXO6gHmYcaaWkt6k4gzZyg+vmxbZKFeCk3FlPkhED50ALW3N87
                    rsp7Rc9sdxBAkP0A5ucLMC63cufaNslCXBNqFjv9Tgn65Vbumr0xAggXIWBjuf9hVF6yFEhXABgQpJwQafz8HW1CfQvxLucYLwTBUvVtsywAZY8N0NOWv0goU5bm22b7WFAmoQPEXmhGs
                    JUCgdY6OlsC8YKhJutYUIijPPf7iIRiKohxZZxTrkHcbGGb6DEeA9K8CZwgtxjSroWhnsvt0c9o18LBg22mh1jcEZ+hKzC9/CYnPn7ysFrPfkp90upDlbb9WUQdYfPMSWZrWNzcBuSrbLWB0T/
                    Hcc546a+eQYgno7XP2a4QYESV8TxVrI0WOrIvOC+Sx3sdMXdZuI65+uaM6HST13gzjRR78YyfWxHiOoNk3G/Nh+1JrsKT1uWE7XoeUz5t259gv6cozfJp01Ghd/KOIr2qq1TZeF/thvr2Zig/
                    q81SNnVORbnqrr4oXidzldYp2NbH3PHiWtNmXczdqF1z31YPcx2mtWuedTDXKj3DyA3hLorLO8x756gLq2buBtnoPIpKtcydaHK27QMVMneVvj6jDlQVc9dXs95ZBf1KmGs/SONzy27fZ+
                    56URr3z99lfou53tlINJnbUfJPZq4d35tO7q6stfQnMN+fdKDTzUvf6hUbnbl2nd0xq8jPtnejZWJdPqEyn06z2eYu7rXGA5BLByJzncNdvlLP3Lm1bh5HINu5srOh93PQ63O0e8we/
                    e052oo78p64ptYgUeV/0N+3oo0aJDlZxkLzUsbXrNAeozCeoPtgk50cLwXLpeRtjkWba6yCNDf2Bx7GXdU7JHsp+UG3RvPSId1LzU9K2oVcL+026bkUzUvp+3PgKl5GLgUbZqZ7qYvmpZyKF6svleyl9OYuAsuljL7Uu+
                    TSitCh74lEU48YFa9gL0V7MTFnBBgw9YjhpWB74zleCpZLOeoRmpfKrXgZ6lEAlksZ6hHaM7hfofHCqUf0r0WjqUfEz1K8UQfz0iE5NqLlUo56BPYMvitY45WbSxleKlc9QutLObkUTeOlv1OAq3jl9qUMjRdtYQXHS7E
                    e8wvuSwVrvMsVlblkL40uXloRBHup5KkGwbmUTn2F5qX0vhTmm+x/INhLL32pDUjOpXQvdbG8lNOXXtSjqiDZSxkflEfzUrnqEUPjTW1zPUSXvjQCzksZpg62uZrhpR7YUt8heXoarS9labxYFe+Avq3IA9sGuWT0pXK9VHIuxf
                    JSyX0pI5devLQq/I6+9OKlVeF39KWCNV7BXgo2e9SRW/EyvNRH81L6+1K4XMqoeNH6UrE3MZLVI/pUA9pXCiR7Kb0M8NG8VGxfKniOd0Bfv+w92yZ7iCWj4kXzUsYc78VLK4LgindAn+OF81KGBCPXS9E+
                    ryhYPZLrpRz1CK3ipZs6nJf+CvWoKddLwT6A3s3JH6WB81LBfSlj0ydYLr2ne6kDph4xvDS1zfUQ3SnZS32wirdPX/V9mT2qDJyNKli5tLEmm7qblefSfwG5La9vfr9T0QAAAABJRU5ErkJggg==" alt="Company Logo" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div> */}
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <Link href="Sign Up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-400 underline">Sign Up</Link>
                    </p>
                    <p className="text-center font-semibold leading-6 text-indigo-600 hover:text-indigo-400 underline">
                        <Link href="/">Home</Link>
                    </p>

                </div>
            </div>
        </div>
    )
}

