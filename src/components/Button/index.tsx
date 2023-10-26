import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    ViewStyle,
    TextStyle,
  } from 'react-native';
  
  import {style} from './style';
  
  interface Props extends TouchableOpacityProps{
    title:string;
  }

  export function ButtonAdd({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={[style.button, { backgroundColor: 'blue' }]} {...rest}>
      <Text style={style.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}

interface ButtonCheckProps extends TouchableOpacityProps {
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export function ButtonCheck({ title, buttonStyle,textStyle, ...rest }: ButtonCheckProps) {
  return (
    <TouchableOpacity style={[style.button, { backgroundColor: 'green' }, buttonStyle]} {...rest}>
      <Text style={[style.textButton, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}