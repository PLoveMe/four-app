'use client'

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {SortValue} from "@/types/globals"
import {SortTitle,SortList} from '@/lib/constans'
export default function Sort() {
    const handleChange = (value: SortValue) => {
        console.log(value)
    }
    return (
        <div className="w-64 py-4">
            <p className="m-5">{SortTitle}</p>
            <ToggleGroup className="flex-col gap-3  " type="single" defaultValue="lastst" onValueChange={handleChange}>
                {
                    SortList.map((item, index) => (
                        <ToggleGroupItem key={index} value={item.value} className="w-full">
                            {item.text}
                        </ToggleGroupItem>
                    ))
                }
            
            </ToggleGroup>
        </div>
    )
}