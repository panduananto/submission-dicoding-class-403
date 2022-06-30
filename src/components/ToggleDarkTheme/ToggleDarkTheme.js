import React, { Fragment } from 'react';

import ReactTooltip from 'react-tooltip';
import { IconContext } from 'react-icons';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';

export default function ToggleDarkTheme(props) {
	return (
		<IconContext.Provider
			value={{
				className: 'h-5 w-5 text-slate-900 transition-colors duration-200 ease-in-out dark:text-slate-400',
			}}
		>
			<Fragment>
				<button
					id="theme-toggle"
					type="button"
					aria-label="theme-toggle-button"
					onClick={props.onChangeDarkThemeHandler}
					className="group inline-flex items-center rounded-lg text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
				>
					{props.darkMode ? (
						<span
							aria-label="theme-toggle-dark-icon"
							data-tip="Dark mode"
							data-for="theme-toggle-dark-tooltip"
							className="p-2.5"
						>
							<MdOutlineDarkMode></MdOutlineDarkMode>
							<ReactTooltip
								id="theme-toggle-dark-tooltip"
								place="bottom"
								effect="solid"
								className="!bg-slate-700 !py-1 !px-2"
								arrowColor="rgb(51, 65, 85)"
								delayShow={200}
							></ReactTooltip>
						</span>
					) : (
						<div
							aria-label="theme-toggle-light-icon"
							data-tip="Light mode"
							data-for="theme-toggle-light-tooltip"
							className="p-2.5"
						>
							<MdOutlineWbSunny></MdOutlineWbSunny>
							<ReactTooltip
								id="theme-toggle-light-tooltip"
								place="bottom"
								effect="solid"
								className="!bg-slate-700 !py-1 !px-2"
								arrowColor="rgb(51, 65, 85)"
								delayShow={200}
							></ReactTooltip>
						</div>
					)}
				</button>
			</Fragment>
		</IconContext.Provider>
	);
}
