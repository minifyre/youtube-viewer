import silo from './node_modules/pane-viewer/index.mjs'
const {config}=silo
config.api='https://www.youtube.com/iframe_api'
config.state=
{
	height:390,
	width:640,

	//@todo wrap into state.file
	paused:true,
	time:6,
	video_id:'PUv66718DII'
}
export default silo