import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/atoms/Input';

const SearchInput = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <div className={cn("relative flex items-center", className)}>
            <Search className="absolute left-3 h-4 w-4 text-slate-400" />
            <Input
                ref={ref}
                className="pl-9"
                placeholder="Search..."
                {...props}
            />
        </div>
    );
});

SearchInput.displayName = 'SearchInput';

export { SearchInput };
