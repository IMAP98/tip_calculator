
import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";


type OrderTotalProps = {
    order: OrderItem[];
    tip: number;
    placeOrder: () => void;
}


export const OrderTotals = ({order, tip, placeOrder} : OrderTotalProps) => {

    const subtotalAmount = useMemo(() => order.reduce((total,item) => total + (item.quantity * item.price), 0), [order]);
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);


    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totals & Tips: </h2>
                <p>
                    Subtotal to pay: <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>
                    Tip: <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>
                    Total to pagar: <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                Save order
            </button>
        </>
    );

}

