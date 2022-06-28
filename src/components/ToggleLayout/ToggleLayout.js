import React, { Fragment } from 'react';

import ReactTooltip from 'react-tooltip';
import { IconContext } from 'react-icons';
import { MdOutlineGridView, MdOutlineViewAgenda } from 'react-icons/md';

export default function ToggleLayout(props) {
	return (
		<IconContext.Provider
			value={{
				className: 'h-5 w-5 text-slate-900 transition-colors duration-200 ease-in-out dark:text-slate-400',
			}}
		>
			<Fragment>
				<button
					id="layout-toggle"
					type="button"
					onClick={props.onChangeLayoutHandler}
					className="group inline-flex items-center rounded-lg text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
				>
					{props.gridLayout ? (
						<span data-tip="Grid view" data-for="layout-toggle-grid-tooltip" className="p-2.5">
							<MdOutlineGridView id="layout-toggle-grid"></MdOutlineGridView>
							<ReactTooltip
								id="layout-toggle-grid-tooltip"
								place="bottom"
								effect="solid"
								className="!bg-slate-700 !py-1 !px-2"
								arrowColor="rgb(51, 65, 85)"
								delayShow={200}
							></ReactTooltip>
						</span>
					) : (
						<span data-tip="List view" data-for="layout-toggle-list-tooltip" className="p-2.5">
							<MdOutlineViewAgenda id="layout-toggle-list"></MdOutlineViewAgenda>
							<ReactTooltip
								id="layout-toggle-list-tooltip"
								place="bottom"
								effect="solid"
								className="!bg-slate-700 !py-1 !px-2"
								arrowColor="rgb(51, 65, 85)"
								delayShow={200}
							></ReactTooltip>
						</span>
					)}
				</button>
			</Fragment>
		</IconContext.Provider>
	);
}
