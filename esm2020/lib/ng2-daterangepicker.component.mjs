import { Directive, Input, Output, EventEmitter } from '@angular/core';
import 'daterangepicker';
import $ from 'jquery';
import * as i0 from "@angular/core";
import * as i1 from "./ng2-daterangepicker.service";
export class DaterangepickerComponent {
    constructor(input, config, differs) {
        this.input = input;
        this.config = config;
        this.differs = differs;
        this.targetOptions = {};
        this._differ = {};
        this.options = {};
        this.selected = new EventEmitter();
        this.cancelDaterangepicker = new EventEmitter();
        this.applyDaterangepicker = new EventEmitter();
        this.hideCalendarDaterangepicker = new EventEmitter();
        this.showCalendarDaterangepicker = new EventEmitter();
        this.hideDaterangepicker = new EventEmitter();
        this.showDaterangepicker = new EventEmitter();
        this._differ['options'] = this.differs.find(this.options).create();
        this._differ['settings'] = this.differs.find(this.config.settings).create();
    }
    ngAfterViewInit() {
        this.render();
        this.attachEvents();
    }
    ngDoCheck() {
        let optionsChanged = this._differ['options'].diff(this.options);
        let settingsChanged = this._differ['settings'].diff(this.config.settings);
        if (optionsChanged || settingsChanged) {
            this.render();
            this.attachEvents();
            if (this.activeRange && this.datePicker) {
                this.datePicker.setStartDate(this.activeRange.start);
                this.datePicker.setEndDate(this.activeRange.end);
            }
        }
    }
    ngOnDestroy() {
        this.destroyPicker();
    }
    render() {
        this.targetOptions = { ...this.config.settings, ...this.options };
        $(this.input.nativeElement).daterangepicker(this.targetOptions, this.callback.bind(this));
        if (this.options.customClasses && this.options.customClasses.length) {
            for (const customClass of this.options.customClasses) {
                this.datePicker = $(this.input.nativeElement).data('daterangepicker').container.addClass(customClass);
            }
        }
        else {
            this.datePicker = $(this.input.nativeElement).data('daterangepicker');
        }
    }
    callback(start, end, label) {
        this.activeRange = {
            start,
            end,
            label,
        };
        this.selected.emit(this.activeRange);
    }
    destroyPicker() {
        try {
            $(this.input.nativeElement).data('daterangepicker').remove();
        }
        catch (e) {
            // eslint-disable-next-line
            console.log(e.message);
        }
    }
    attachEvents() {
        $(this.input.nativeElement).on('cancel.daterangepicker', (e, picker) => {
            const event = { event: e, picker };
            this.cancelDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('apply.daterangepicker', (e, picker) => {
            const event = { event: e, picker };
            this.applyDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('hideCalendar.daterangepicker', (e, picker) => {
            const event = { event: e, picker };
            this.hideCalendarDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('showCalendar.daterangepicker', (e, picker) => {
            const event = { event: e, picker };
            this.showCalendarDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('hide.daterangepicker', (e, picker) => {
            const event = { event: e, picker };
            this.hideDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('show.daterangepicker', (e, picker) => {
            const event = { event: e, picker };
            this.showDaterangepicker.emit(event);
        });
    }
}
DaterangepickerComponent.ɵfac = function DaterangepickerComponent_Factory(t) { return new (t || DaterangepickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DaterangepickerConfig), i0.ɵɵdirectiveInject(i0.KeyValueDiffers)); };
DaterangepickerComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DaterangepickerComponent, selectors: [["", "daterangepicker", ""]], inputs: { options: "options" }, outputs: { selected: "selected", cancelDaterangepicker: "cancelDaterangepicker", applyDaterangepicker: "applyDaterangepicker", hideCalendarDaterangepicker: "hideCalendarDaterangepicker", showCalendarDaterangepicker: "showCalendarDaterangepicker", hideDaterangepicker: "hideDaterangepicker", showDaterangepicker: "showDaterangepicker" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DaterangepickerComponent, [{
        type: Directive,
        args: [{
                selector: '[daterangepicker]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DaterangepickerConfig }, { type: i0.KeyValueDiffers }]; }, { options: [{
            type: Input
        }], selected: [{
            type: Output
        }], cancelDaterangepicker: [{
            type: Output
        }], applyDaterangepicker: [{
            type: Output
        }], hideCalendarDaterangepicker: [{
            type: Output
        }], showCalendarDaterangepicker: [{
            type: Output
        }], hideDaterangepicker: [{
            type: Output
        }], showDaterangepicker: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItZGF0ZXJhbmdlcGlja2VyL3NyYy9saWIvbmcyLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7O0FBTXZCLE1BQU0sT0FBTyx3QkFBd0I7SUFpQm5DLFlBQ1UsS0FBaUIsRUFDakIsTUFBNkIsRUFDN0IsT0FBd0I7UUFGeEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUF1QjtRQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQWxCMUIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUlqQixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBRWpCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0MseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyxnQ0FBMkIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELGdDQUEyQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakQsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBT2pELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFD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ICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIERvQ2hlY2ssXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgS2V5VmFsdWVEaWZmZXJzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICdkYXRlcmFuZ2VwaWNrZXInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IERhdGVyYW5nZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vbmcyLWRhdGVyYW5nZXBpY2tlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RhdGVyYW5nZXBpY2tlcl0nXG59KVxuZXhwb3J0IGNsYXNzIERhdGVyYW5nZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XG4gIHByaXZhdGUgYWN0aXZlUmFuZ2U6IGFueTtcbiAgcHJpdmF0ZSB0YXJnZXRPcHRpb25zOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfZGlmZmVyOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgZGF0ZVBpY2tlcjogYW55O1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IHt9O1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNhbmNlbERhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFwcGx5RGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGlkZUNhbGVuZGFyRGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2hvd0NhbGVuZGFyRGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGlkZURhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNob3dEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNvbmZpZzogRGF0ZXJhbmdlcGlja2VyQ29uZmlnLFxuICAgIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzXG4gICkge1xuICAgIHRoaXMuX2RpZmZlclsnb3B0aW9ucyddID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5vcHRpb25zKS5jcmVhdGUoKTtcbiAgICB0aGlzLl9kaWZmZXJbJ3NldHRpbmdzJ10gPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLmNvbmZpZy5zZXR0aW5ncykuY3JlYXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGxldCBvcHRpb25zQ2hhbmdlZCA9IHRoaXMuX2RpZmZlclsnb3B0aW9ucyddLmRpZmYodGhpcy5vcHRpb25zKTtcbiAgICBsZXQgc2V0dGluZ3NDaGFuZ2VkID0gdGhpcy5fZGlmZmVyWydzZXR0aW5ncyddLmRpZmYodGhpcy5jb25maWcuc2V0dGluZ3MpO1xuXG4gICAgaWYgKG9wdGlvbnNDaGFuZ2VkIHx8IHNldHRpbmdzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIHRoaXMuYXR0YWNoRXZlbnRzKCk7XG4gICAgICBpZiAodGhpcy5hY3RpdmVSYW5nZSAmJiB0aGlzLmRhdGVQaWNrZXIpIHtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyLnNldFN0YXJ0RGF0ZSh0aGlzLmFjdGl2ZVJhbmdlLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyLnNldEVuZERhdGUodGhpcy5hY3RpdmVSYW5nZS5lbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveVBpY2tlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy50YXJnZXRPcHRpb25zID0geyAuLi50aGlzLmNvbmZpZy5zZXR0aW5ncywgLi4udGhpcy5vcHRpb25zIH07XG5cbiAgICAoPGFueT4kKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkpLmRhdGVyYW5nZXBpY2tlcihcbiAgICAgIHRoaXMudGFyZ2V0T3B0aW9ucyxcbiAgICAgIHRoaXMuY2FsbGJhY2suYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmN1c3RvbUNsYXNzZXMgJiYgdGhpcy5vcHRpb25zLmN1c3RvbUNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGNvbnN0IGN1c3RvbUNsYXNzIG9mIHRoaXMub3B0aW9ucy5jdXN0b21DbGFzc2VzKSB7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlciA9IChcbiAgICAgICAgICA8YW55PiQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KVxuICAgICAgICApLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLmNvbnRhaW5lci5hZGRDbGFzcyhjdXN0b21DbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlciA9IChcbiAgICAgICAgPGFueT4kKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudClcbiAgICAgICkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxsYmFjayhzdGFydD86IGFueSwgZW5kPzogYW55LCBsYWJlbD86IGFueSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlUmFuZ2UgPSB7XG4gICAgICBzdGFydCxcbiAgICAgIGVuZCxcbiAgICAgIGxhYmVsLFxuICAgIH07XG5cbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQodGhpcy5hY3RpdmVSYW5nZSk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lQaWNrZXIoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5yZW1vdmUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hFdmVudHMoKTogdm9pZCB7XG4gICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKFxuICAgICAgJ2NhbmNlbC5kYXRlcmFuZ2VwaWNrZXInLFxuICAgICAgKGU6IGFueSwgcGlja2VyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXIgfTtcbiAgICAgICAgdGhpcy5jYW5jZWxEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbihcbiAgICAgICdhcHBseS5kYXRlcmFuZ2VwaWNrZXInLFxuICAgICAgKGU6IGFueSwgcGlja2VyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXIgfTtcbiAgICAgICAgdGhpcy5hcHBseURhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKFxuICAgICAgJ2hpZGVDYWxlbmRhci5kYXRlcmFuZ2VwaWNrZXInLFxuICAgICAgKGU6IGFueSwgcGlja2VyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXIgfTtcbiAgICAgICAgdGhpcy5oaWRlQ2FsZW5kYXJEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbihcbiAgICAgICdzaG93Q2FsZW5kYXIuZGF0ZXJhbmdlcGlja2VyJyxcbiAgICAgIChlOiBhbnksIHBpY2tlcjogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0geyBldmVudDogZSwgcGlja2VyIH07XG4gICAgICAgIHRoaXMuc2hvd0NhbGVuZGFyRGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oXG4gICAgICAnaGlkZS5kYXRlcmFuZ2VwaWNrZXInLFxuICAgICAgKGU6IGFueSwgcGlja2VyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXIgfTtcbiAgICAgICAgdGhpcy5oaWRlRGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oXG4gICAgICAnc2hvdy5kYXRlcmFuZ2VwaWNrZXInLFxuICAgICAgKGU6IGFueSwgcGlja2VyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXIgfTtcbiAgICAgICAgdGhpcy5zaG93RGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==