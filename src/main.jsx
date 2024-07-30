import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primeicons/primeicons.css';
import {PrimeReactProvider} from 'primereact/api';
import ThemeSwitcher from './components/themeSwitcher';
import {classNames} from "primereact/utils";

import './index.css';
import './flags.css';
import App from './App';

let TRANSITIONS = {
    toggleable: {
        timeout: 500,
        classNames: {
            enter: 'max-h-0',
            enterActive: '!max-h-[1000px] overflow-hidden transition-[max-height] duration-500 ease-in',
            exit: 'max-h-[1000px]',
            exitActive: '!max-h-0 overflow-hidden transition-[max-height] duration-500 ease-out'
        }
    },
    overlay: {
        timeout: 150,
        classNames: {
            enter: 'opacity-0 scale-75',
            enterActive: 'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
            exit: 'opacity-100',
            exitActive: '!opacity-0 transition-opacity duration-150 ease-linear'
        }
    }
};
const root = ReactDOM.createRoot(document.getElementById('root'));
const bricksPT = {
    calendar: {
        // span that contains the button and the input
        root: function root(_ref64) {
            let props = _ref64.props;
            return {
                className: classNames('flex flex-grow')
            };
        },
        input: {
            root: function root(_ref65) {
                let parent = _ref65.parent;
                return {
                    className: classNames('flex-1 py-1.5 text outline-none bg-transparent placeholder-color-default text-color-on-base', {
                        'rounded-lg': !parent.props.showIcon,
                        'border-r-0 rounded-l-lg': parent.props.showIcon
                    })
                };
            }
        },
        dropdownButton: {
            root: function root({props}) {
                return {
                    className: classNames()
                };
            }
        },
        panel: function panel(_ref67) {
            var props = _ref67.props;
            return {
                className: classNames('bg-white dark:bg-gray-900', {
                    'shadow-md border-0 absolute': !props.inline,
                    'inline-block overflow-x-auto border border-gray-300 dark:border-blue-900/40 p-2 rounded-lg': props.inline
                }),
            };
        },
        header: {
            className: classNames('flex items-center justify-between', 'p-2 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-semibold m-0 border-b border-gray-300 dark:border-blue-900/40 rounded-t-lg')
        },
        previousButton: {
            className: classNames('flex items-center justify-center cursor-pointer overflow-hidden relative', 'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out', 'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 ')
        },
        title: 'leading-8 mx-auto',
        monthTitle: {
            className: classNames('text-gray-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'mr-2', 'hover:text-blue-500')
        },
        yearTitle: {
            className: classNames('text-gray-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'hover:text-blue-500')
        },
        nextButton: {
            className: classNames('flex items-center justify-center cursor-pointer overflow-hidden relative', 'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out', 'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 ')
        },
        table: {
            className: classNames('border-collapse w-full', 'my-2')
        },
        tableHeaderCell: 'p-2',
        weekDay: 'text-gray-600 dark:text-white/70',
        day: 'p-2',
        dayLabel: function dayLabel(_ref68) {
            var context = _ref68.context;
            return {
                className: classNames('w-10 h-10 rounded-full transition-shadow duration-200 border-transparent border', 'flex items-center justify-center mx-auto overflow-hidden relative', 'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]', {
                    'opacity-60 cursor-default': context.disabled,
                    'cursor-pointer': !context.disabled
                }, {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-white primary-background hover:bg-blue-200': context.selected && !context.disabled
                })
            };
        },
        monthPicker: 'my-2',
        month: function month(_ref69) {
            var context = _ref69.context;
            return {
                className: classNames('w-1/3 inline-flex items-center justify-center cursor-pointer overflow-hidden relative', 'p-2 transition-shadow duration-200 rounded-lg', 'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]', {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled
                })
            };
        },
        yearPicker: {
            className: classNames('my-2')
        },
        year: function year(_ref70) {
            var context = _ref70.context;
            return {
                className: classNames('w-1/2 inline-flex items-center justify-center cursor-pointer overflow-hidden relative', 'p-2 transition-shadow duration-200 rounded-lg', 'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]', {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled
                })
            };
        },
        timePicker: {
            className: classNames('flex justify-center items-center', 'border-t-1 border-solid border-gray-300 p-2')
        },
        separatorContainer: 'flex items-center flex-col px-2',
        separator: 'text-xl',
        hourPicker: 'flex items-center flex-col px-2',
        minutePicker: 'flex items-center flex-col px-2',
        ampmPicker: 'flex items-center flex-col px-2',
        incrementButton: {
            className: classNames('flex items-center justify-center cursor-pointer overflow-hidden relative', 'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out', 'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 ')
        },
        decrementButton: {
            className: classNames('flex items-center justify-center cursor-pointer overflow-hidden relative', 'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out', 'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 ')
        },
        groupContainer: 'flex bg-white',
        group: {
            className: classNames('flex-1 bg-white shadow-lg', 'border-l border-gray-300 pr-0.5 pl-0.5 pt-0 pb-0', 'first:pl-0 first:border-l-0')
        },
        transition: TRANSITIONS.overlay
    },
}
root.render(
    <React.StrictMode>
        <PrimeReactProvider value={{unstyled: true, pt: bricksPT}}>
            <ThemeSwitcher/>
            <App/>
        </PrimeReactProvider>
    </React.StrictMode>
);
