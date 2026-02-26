import * as i0 from '@angular/core';
import { OnInit, EventEmitter, NgZone } from '@angular/core';
import * as i1 from '@bluehalo/ngx-leaflet';
import { LeafletDirectiveWrapper, LeafletDirective } from '@bluehalo/ngx-leaflet';
import * as leaflet from 'leaflet';
import { Control, DrawEvents } from 'leaflet';

declare class LeafletDrawDirective implements OnInit {
    private zone;
    leafletDirective: LeafletDirectiveWrapper;
    drawControl: Control.Draw;
    drawOptions: Control.DrawConstructorOptions;
    drawLocal: any;
    drawReady: EventEmitter<Control.Draw>;
    onDrawCreated: EventEmitter<DrawEvents.Created>;
    onDrawEdited: EventEmitter<DrawEvents.Edited>;
    onDrawDeleted: EventEmitter<DrawEvents.Deleted>;
    onDrawStart: EventEmitter<DrawEvents.DrawStart>;
    onDrawStop: EventEmitter<DrawEvents.DrawStop>;
    onDrawVertex: EventEmitter<DrawEvents.DrawVertex>;
    onDrawEditStart: EventEmitter<DrawEvents.EditStart>;
    onDrawEditMove: EventEmitter<DrawEvents.EditMove>;
    onDrawEditResize: EventEmitter<DrawEvents.EditResize>;
    onDrawEditVertex: EventEmitter<DrawEvents.EditVertex>;
    onDrawEditStop: EventEmitter<DrawEvents.EditStop>;
    onDrawDeleteStart: EventEmitter<DrawEvents.DeleteStart>;
    onDrawDeleteStop: EventEmitter<DrawEvents.DeleteStop>;
    onDrawToolbarOpened: EventEmitter<leaflet.LeafletEvent>;
    onDrawToolbarClosed: EventEmitter<leaflet.LeafletEvent>;
    onDrawMarkerContext: EventEmitter<leaflet.LeafletEvent>;
    constructor(leafletDirective: LeafletDirective, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getDrawControl(): Control.Draw;
    static ɵfac: i0.ɵɵFactoryDeclaration<LeafletDrawDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LeafletDrawDirective, "[leafletDraw]", never, { "drawOptions": { "alias": "leafletDrawOptions"; "required": false; }; "drawLocal": { "alias": "leafletDrawLocal"; "required": false; }; }, { "drawReady": "leafletDrawReady"; "onDrawCreated": "leafletDrawCreated"; "onDrawEdited": "leafletDrawEdited"; "onDrawDeleted": "leafletDrawDeleted"; "onDrawStart": "leafletDrawStart"; "onDrawStop": "leafletDrawStop"; "onDrawVertex": "leafletDrawVertex"; "onDrawEditStart": "leafletDrawEditStart"; "onDrawEditMove": "leafletDrawEditMove"; "onDrawEditResize": "leafletDrawEditResize"; "onDrawEditVertex": "leafletDrawEditVertex"; "onDrawEditStop": "leafletDrawEditStop"; "onDrawDeleteStart": "leafletDrawDeleteStart"; "onDrawDeleteStop": "leafletDrawDeleteStop"; "onDrawToolbarOpened": "leafletDrawToolbarOpened"; "onDrawToolbarClosed": "leafletDrawToolbarClosed"; "onDrawMarkerContext": "leafletDrawMarkerContext"; }, never, never, true, never>;
}

declare class LeafletDrawModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<LeafletDrawModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<LeafletDrawModule, never, [typeof i1.LeafletModule, typeof LeafletDrawDirective], [typeof LeafletDrawDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<LeafletDrawModule>;
}

export { LeafletDrawDirective, LeafletDrawModule };
