import React from 'react';

interface FacebookOutlineIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const FacebookOutlineIcon: React.FC<FacebookOutlineIconProps> = ({ className = 'w-7 h-7', ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props} // Spread any additional props here
        >
            <path
                d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11
        h4.205l-0.571,4H16v12H12z"
            ></path>
        </svg>
    );
};

export default FacebookOutlineIcon;
