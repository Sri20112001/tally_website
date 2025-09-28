import {useEffect, useState} from "react";

const StatNumber = ({number}) => {
    const [count, setCount] = useState(0);

    // Separate numeric and symbol parts
    const numberStr = number.toString();
    const numericPart = parseInt(numberStr.replace(/\D/g, ""), 10);
    const symbolPart = numberStr.replace(/\d/g, ""); // anything non-digit

    useEffect(() => {
        if (isNaN(numericPart)) return;

        let start = 0;
        const end = numericPart;
        const duration = 1000; // 1 second
        const incrementTime = 20; // ms
        const step = end / (duration / incrementTime);

        const interval = setInterval(() => {
            start += step;
            if (start >= end) {
                start = end;
                clearInterval(interval);
            }
            setCount(Math.floor(start));
        }, incrementTime);

        return () => clearInterval(interval);
    }, [numericPart]);

    return (
        <h3 className="text-4xl font-extrabold mb-2">
            {count}
            {count === numericPart && symbolPart}
        </h3>
    );
};

export default StatNumber;
