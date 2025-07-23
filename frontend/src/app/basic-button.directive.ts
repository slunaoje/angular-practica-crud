import {
    Directive,
    ElementRef,
    HostListener,
    inject,
    input,
    OnInit,
} from '@angular/core'

@Directive({
    selector: '[appBasicButton]',
})
export class BasicButtonDirective implements OnInit {
    private el = inject(ElementRef)
    appBasicButton = input<string>('')
    // private primaryColor = 'rgb(33 158 188)'
    ngOnInit() {
        const primaryColor = this.appBasicButton()
        const primaryColorHover = oscurecerColor(this.appBasicButton(), 0.7)
        this.el.nativeElement.style.padding = '10px 20px'
        this.el.nativeElement.style.borderRadius = '10px'
        this.el.nativeElement.style.border = '0'
        this.el.nativeElement.style.backgroundColor = primaryColor
        this.el.nativeElement.style.fontWeight = 600
        this.el.nativeElement.style.textDecoration = 'none'

        // Guardar colores para los eventos
        this.primaryColor = primaryColor
        this.primaryColorHover = primaryColorHover
    }

    private primaryColor = ''
    private primaryColorHover = ''

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.primaryColorHover)
        this.el.nativeElement.style.boxShadow =
            'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(this.primaryColor)
        this.el.nativeElement.style.boxShadow = ''
    }
    @HostListener('mousedown') onMouseDown() {
        this.highlight(this.primaryColorHover)
        this.el.nativeElement.style.boxShadow = ''
        this.el.nativeElement.style.transform = 'translateY(1px)'
    }
    @HostListener('mouseup') onMouseUp() {
        this.highlight(this.primaryColorHover)
        this.highlight(this.primaryColorHover)
        this.el.nativeElement.style.boxShadow =
            'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
        this.el.nativeElement.style.transform = ''
    }
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color
    }
}

function oscurecerColor(rgb: string, factor: number): string {
    // Convierte el string RGB a un array de números

    const coincidencias = rgb.match(/\d+/g)

    if (!coincidencias || coincidencias.length < 3) {
        console.error('Formato RGB inválido:', rgb)
        return rgb // o lanza un error si prefieres
    }

    const [r, g, b] = coincidencias.map(Number)

    // Aplica el factor de oscurecimiento
    const nuevoR = Math.max(0, Math.floor(r * factor))
    const nuevoG = Math.max(0, Math.floor(g * factor))
    const nuevoB = Math.max(0, Math.floor(b * factor))

    // Devuelve el nuevo color RGB
    return `rgb(${nuevoR}, ${nuevoG}, ${nuevoB})`
}
