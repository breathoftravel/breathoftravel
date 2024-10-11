import {useState} from "react";

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
        <div className="flex space-x-4 p-4">
            {tags.map(tag => (
                <div key={tag.id} className="bg-gray-100 px-4 py-2 rounded flex items-center space-x-2">
                    <span className="text-gray-400">{tag.text}</span>
                    <span className="text-gray-400 cursor-pointer" onClick={() => removeTag(tag.id)}>x</span>
                </div>
            ))}
        </div>
    );
}