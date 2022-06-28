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
					type="button"
					onClick={props.onChangeDarkThemeHandler}
					className="group inline-flex items-center rounded-lg text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
				>
					{props.darkMode ? (
						<div data-tip="Dark mode" data-for="darkMode" className="p-2.5">
							<MdOutlineDarkMode></MdOutlineDarkMode>
							<ReactTooltip
								id="darkMode"
								place="bottom"
								effect="solid"
								className="!bg-slate-700 !py-1 !px-2"
								arrowColor="rgb(51, 65, 85)"
								delayShow={200}
							></ReactTooltip>
						</div>
					) : (
						<div data-tip="Light mode" data-for="lightMode" className="p-2.5">
							<MdOutlineWbSunny></MdOutlineWbSunny>
							<ReactTooltip
								id="lightMode"
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
