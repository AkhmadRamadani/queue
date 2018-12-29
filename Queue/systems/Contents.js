import { Alert, PermissionsAndroid, AsyncStorage, ToastAndroid, Clipboard, Dimensions } from 'react-native';;

import { FormatString, CheckOperator, FormatTimes, EasyNumberRead } from '../libraries/Format';

import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConfig } from "../systems/Config";

export var Navigation;
export var Pop;
export var SetState;
export var State = [];
export var ContentRefresh;
export var ShowModal;
export var HideModal;

export function SetNavigation(nav) { Navigation = nav; }

export function SetPop(value) { Pop = value; }

export function SetSetState(state, fun) { State = state; SetState = fun; }

export function SetContentRefresher(fun) { ContentRefresh = fun; }

export function SetShowModal(fun) { ShowModal = fun; }

export function SetHideModal(fun) { HideModal = fun; }