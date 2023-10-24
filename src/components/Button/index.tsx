import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
  } from 'react-native';
  
  import {style} from './style';
  
  interface Props extends TouchableOpacityProps{
    title:string;
  }
  export function Button({title, ...rest}:Props){
    const backgroundColorButton = title ==='+'? 'blue': '#bf2d07';
    
    return (
       <TouchableOpacity style={[style.button,{backgroundColor:backgroundColorButton}]} {...rest}>
            <Text style={style.textButton}>{title}</Text>
        </TouchableOpacity>
    )
  }