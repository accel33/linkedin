const SideBar = () => {
	return (
		<div
			className="fixed top-0 h-screen w-16 m-0 
    flex flex-col bg-gray-900"
		>
			<i className="text-red-800">A</i>
			<i>B</i>
			<i>C</i>
			<i>D</i>
			<i>E</i>
		</div>
	);
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
	<div className="sidebar-icon">
		{icon}
		<span className="sidebar-tooltip">{text}</span>
	</div>
);
export default SideBar;
