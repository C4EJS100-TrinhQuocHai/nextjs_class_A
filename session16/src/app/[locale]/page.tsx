"use client"
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export default function HomePage() {
    const [select, setSelect] = useState(false);
    const route = useRouter();
    const t = useTranslations('HomePage');
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log("giá trị người dùng chọn", event.target.value);
        // setSelect(event.target.value);
        if (event.target.value == "en") {
            route.push("/en")
            setSelect(true)
        } else {
            route.push("/vi")
            setSelect(false)
        }
    }
    return <>
        <h1>{t('title')}</h1>
        <select onChange={handleChange} name="" id="">
            <option selected={select} value="vi">tiếng việt</option>
            <option selected={select} value="en">tiếng anh</option>
        </select>
    </>;
}