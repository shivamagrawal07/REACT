import { useState } from "react"
import { InputBox } from "./Components"
import useCurrencyInfo from "./hooks/useCurrencyinfo"

function App() {
    const [amount, setAmount] = useState("")
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState("")

  
    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo || {})

    // Swap currencies
    const swap = () => {
        setFrom(to)
        setTo(from)

        setAmount(convertedAmount)
        setConvertedAmount(amount)
    }

    const convert = () => {
        if (!amount || !currencyInfo || !currencyInfo[to]) {
            return
        }

        setConvertedAmount(
            Number(amount) * currencyInfo[to]
        )
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://media.istockphoto.com/id/1503371245/photo/percentage-sign-on-top-of-coin-stacks-before-blue-financial-graph.jpg?b=1&s=612x612&w=0&k=20&c=7A_2QwhEcxkciMxlpLL22UXAUbEIUE2nrdVTrWgsrbM=')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">

                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            convert()
                        }}
                    >
                        {/* FROM */}
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                CurrencyOptions={options}
                                onCurrencyChange={(currency) =>
                                    setFrom(currency)
                                }
                                selectCurrency={from}
                                onAmountChange={(value) =>
                                    setAmount(value)
                                }
                            />
                        </div>

                        {/* SWAP BUTTON */}
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>

                        {/* TO */}
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                CurrencyOptions={options}
                                onCurrencyChange={(currency) =>
                                    setTo(currency)
                                }
                                selectCurrency={to}
                                amountDisable={true}
                            />
                        </div>

                        {/* CONVERT BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default App