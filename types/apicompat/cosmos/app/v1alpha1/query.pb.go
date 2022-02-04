// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cosmos/app/v1alpha1/query.proto

package appv1alpha1

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// QueryConfigRequest is the Query/Config request type.
type QueryConfigRequest struct {
}

func (m *QueryConfigRequest) Reset()         { *m = QueryConfigRequest{} }
func (m *QueryConfigRequest) String() string { return proto.CompactTextString(m) }
func (*QueryConfigRequest) ProtoMessage()    {}
func (*QueryConfigRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_bd84655af543ba53, []int{0}
}
func (m *QueryConfigRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryConfigRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryConfigRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryConfigRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryConfigRequest.Merge(m, src)
}
func (m *QueryConfigRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryConfigRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryConfigRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryConfigRequest proto.InternalMessageInfo

// QueryConfigRequest is the Query/Config response type.
type QueryConfigResponse struct {
	// config is the current app config.
	Config *Config `protobuf:"bytes,1,opt,name=config,proto3" json:"config,omitempty"`
}

func (m *QueryConfigResponse) Reset()         { *m = QueryConfigResponse{} }
func (m *QueryConfigResponse) String() string { return proto.CompactTextString(m) }
func (*QueryConfigResponse) ProtoMessage()    {}
func (*QueryConfigResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_bd84655af543ba53, []int{1}
}
func (m *QueryConfigResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryConfigResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryConfigResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryConfigResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryConfigResponse.Merge(m, src)
}
func (m *QueryConfigResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryConfigResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryConfigResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryConfigResponse proto.InternalMessageInfo

func (m *QueryConfigResponse) GetConfig() *Config {
	if m != nil {
		return m.Config
	}
	return nil
}

func init() {
	proto.RegisterType((*QueryConfigRequest)(nil), "cosmos.app.v1alpha1.QueryConfigRequest")
	proto.RegisterType((*QueryConfigResponse)(nil), "cosmos.app.v1alpha1.QueryConfigResponse")
}

func init() { proto.RegisterFile("cosmos/app/v1alpha1/query.proto", fileDescriptor_bd84655af543ba53) }

var fileDescriptor_bd84655af543ba53 = []byte{
	// 315 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4f, 0xce, 0x2f, 0xce,
	0xcd, 0x2f, 0xd6, 0x4f, 0x2c, 0x28, 0xd0, 0x2f, 0x33, 0x4c, 0xcc, 0x29, 0xc8, 0x48, 0x34, 0xd4,
	0x2f, 0x2c, 0x4d, 0x2d, 0xaa, 0xd4, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x86, 0x28, 0xd0,
	0x4b, 0x2c, 0x28, 0xd0, 0x83, 0x29, 0x90, 0x52, 0xc0, 0xa6, 0x2b, 0x39, 0x3f, 0x2f, 0x2d, 0x33,
	0x1d, 0xa2, 0x4d, 0x49, 0x84, 0x4b, 0x28, 0x10, 0x64, 0x8a, 0x33, 0x58, 0x30, 0x28, 0xb5, 0xb0,
	0x34, 0xb5, 0xb8, 0x44, 0xc9, 0x8b, 0x4b, 0x18, 0x45, 0xb4, 0xb8, 0x20, 0x3f, 0xaf, 0x38, 0x55,
	0xc8, 0x98, 0x8b, 0x0d, 0xa2, 0x59, 0x82, 0x51, 0x81, 0x51, 0x83, 0xdb, 0x48, 0x5a, 0x0f, 0x8b,
	0xa5, 0x7a, 0x50, 0x4d, 0x50, 0xa5, 0x46, 0x69, 0x5c, 0xac, 0x60, 0xb3, 0x84, 0x62, 0xb9, 0xd8,
	0x20, 0x52, 0x42, 0xea, 0x58, 0xf5, 0x61, 0xba, 0x43, 0x4a, 0x83, 0xb0, 0x42, 0x88, 0xd3, 0x94,
	0x18, 0x9c, 0x7e, 0x32, 0x9e, 0x78, 0x24, 0xc7, 0x78, 0xe1, 0x91, 0x1c, 0xe3, 0x83, 0x47, 0x72,
	0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78, 0x2c, 0xc7, 0x70, 0xe3, 0xb1, 0x1c, 0x03, 0x97, 0x78,
	0x72, 0x7e, 0x2e, 0x36, 0x93, 0x9c, 0xb8, 0xc0, 0x46, 0x05, 0x80, 0x42, 0x22, 0x80, 0x31, 0xca,
	0x27, 0x3d, 0xb3, 0x24, 0xa3, 0x34, 0x49, 0x2f, 0x39, 0x3f, 0x57, 0x1f, 0x1a, 0x70, 0x10, 0x4a,
	0xb7, 0x38, 0x25, 0x5b, 0xbf, 0xa4, 0xb2, 0x20, 0x15, 0x14, 0x92, 0x99, 0xc9, 0xf9, 0xb9, 0x05,
	0x89, 0x25, 0xfa, 0x58, 0x82, 0xd6, 0x3a, 0xb1, 0xa0, 0x00, 0xc6, 0x5e, 0xc4, 0xc4, 0xec, 0xec,
	0x18, 0xb1, 0x8a, 0x49, 0xd8, 0x19, 0x62, 0xaf, 0x63, 0x41, 0x81, 0x5e, 0x18, 0x54, 0xee, 0x14,
	0x4c, 0x34, 0xc6, 0xb1, 0xa0, 0x20, 0x06, 0x26, 0xfa, 0x88, 0x49, 0x1e, 0x8b, 0x68, 0x8c, 0x7b,
	0x80, 0x93, 0x6f, 0x6a, 0x49, 0x62, 0x4a, 0x62, 0x49, 0xe2, 0x2b, 0x26, 0x51, 0x88, 0x0a, 0x2b,
	0x2b, 0xc7, 0x82, 0x02, 0x2b, 0x2b, 0x98, 0x9a, 0x24, 0x36, 0x70, 0x64, 0x1a, 0x03, 0x02, 0x00,
	0x00, 0xff, 0xff, 0xd1, 0x3e, 0xd4, 0x69, 0x26, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// Config returns the current app config.
	Config(ctx context.Context, in *QueryConfigRequest, opts ...grpc.CallOption) (*QueryConfigResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Config(ctx context.Context, in *QueryConfigRequest, opts ...grpc.CallOption) (*QueryConfigResponse, error) {
	out := new(QueryConfigResponse)
	err := c.cc.Invoke(ctx, "/cosmos.app.v1alpha1.Query/Config", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// Config returns the current app config.
	Config(context.Context, *QueryConfigRequest) (*QueryConfigResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Config(ctx context.Context, req *QueryConfigRequest) (*QueryConfigResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Config not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Config_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryConfigRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Config(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cosmos.app.v1alpha1.Query/Config",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Config(ctx, req.(*QueryConfigRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "cosmos.app.v1alpha1.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Config",
			Handler:    _Query_Config_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "cosmos/app/v1alpha1/query.proto",
}

func (m *QueryConfigRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryConfigRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryConfigRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *QueryConfigResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryConfigResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryConfigResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Config != nil {
		{
			size, err := m.Config.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryConfigRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *QueryConfigResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Config != nil {
		l = m.Config.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryConfigRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryConfigRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryConfigRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryConfigResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryConfigResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryConfigResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Config", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Config == nil {
				m.Config = &Config{}
			}
			if err := m.Config.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
