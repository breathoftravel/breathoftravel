import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { X } from 'lucide-react';

export default function TagLabel() {
    const [tags, setTags] = useState([
        { id: 1, text: 'train adven' },
        { id: 2, text: 'phuket' },
        { id: 3, text: 'news' }
    ]);

    const removeTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    };

    return (
        <div className="flex flex-wrap gap-2 p-4">
            {tags.map(tag => (
                <Badge 
                    key={tag.id} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200"
                >
                    {tag.text}
                    <button
                        onClick={() => removeTag(tag.id)}
                        className="ml-2 hover:text-red-500 focus:outline-none"
                        aria-label={`Remove ${tag.text} tag`}
                    >
                        <X size={14} />
                    </button>
                </Badge>
            ))}
        </div>
    );
}

