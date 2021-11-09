class users{
    constructor(ID,UserName,Password,Enabled,MaNv ,UserType,UserGroup,Per_Xem,Per_Them,Per_Sua ,Per_Xoa ,Per_Duyet ,Per_Tatca ,KPI_View,BaoCao_View,NhanSu_View,DNTT_View,Booking,Bill,Customers,TinhTP,KhoID,NhomQuyen,NgayDoi ,QLTT ,Per_Menu){
    
        
        this.ID = ID; 
        this.UserName = UserName; 
        this.Password = Password;
        this.Enabled = Enabled;
        this.MaNv = MaNv;
        this.UserType = UserType;
        this.UserGroup = UserGroup;
        this.Per_Xem = Per_Xem;
        this.Per_Them = Per_Them;
        this.Per_Sua = Per_Sua;
        this.Per_Xoa = Per_Xoa;
        this.Per_Duyet = Per_Duyet;
        this.Per_Tatca = Per_Tatca;
        this.KPI_View = KPI_View;
        this.BaoCao_View = BaoCao_View;
        this.NhanSu_View = NhanSu_View;
        this.DNTT_View = DNTT_View;
        this.Booking = Booking;
        this.Bill = Bill;
        this.Customers = Customers;
        this.TinhTP = TinhTP;
        this.KhoID = KhoID;
        this.NhomQuyen = NhomQuyen;
        this.NgayDoi = NgayDoi;
        this.QLTT = QLTT;
        this.Per_Menu = Per_Menu;
}
}

module.exports = users;