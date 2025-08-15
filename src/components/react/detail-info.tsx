import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'

const Detail = () => {
  return (
    <div>
        <div className='py-5'>
            <div className='space-y-2'>
                <div className='border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative w-full max-w-xs rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)]:*:pointer-events-none'>
                    <label className='text-foreground dark:bg-input/30 block px-3 pt-1 text-xs font-medium'>
                        First Name
                    </label>
                    <input
                        type='text'
                        className='text-foreground placeholder:text-muted-foreground dark:bg-input/30 flex h-8 w-full bg-transparent px-3 pb-1 text-sm focus-visible:outline-none'
                    />
                </div>
            </div>
            <Separator className='py-2 invisible'/>
            <div className='space-y-2'>
                <div className='border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative w-full max-w-xs rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)]:*:pointer-events-none'>
                    <label className='text-foreground dark:bg-input/30 block px-3 pt-1 text-xs font-medium'>
                        Last Name
                    </label>
                    <input
                        type='text'
                        className='text-foreground placeholder:text-muted-foreground dark:bg-input/30 flex h-8 w-full bg-transparent px-3 pb-1 text-sm focus-visible:outline-none'
                    />
                </div>
            </div>
            <Separator className='py-2 invisible'/>
            <div className='space-y-2'>
                <div className='border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative w-full max-w-xs rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)]:*:pointer-events-none'>
                    <label className='text-foreground dark:bg-input/30 block px-3 pt-1 text-xs font-medium'>
                        Job Title
                    </label>
                    <input
                        type='text'
                        className='text-foreground placeholder:text-muted-foreground dark:bg-input/30 flex h-8 w-full bg-transparent px-3 pb-1 text-sm focus-visible:outline-none'
                    />
                </div>
            </div>
            <Separator className='py-2 invisible'/>

            <Label>Contact Details</Label>

        </div>
    </div>
  )
}

export default Detail